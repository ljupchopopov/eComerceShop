import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../services/ProductService';
import { Container } from './SingleProductPageStyled';
import Rating from '@mui/material/Rating';
import { FaCheck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { CiHeart, CiDeliveryTruck } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { saveInCartAction } from '../../store/cartSlice';
import { updateFavoriteAction } from '../../store/favoriteSlice'; // ✅

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [countProduct, setCountProduct] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const favorites = useSelector(state => state.favoriteStore.allFavorite);
  const isFavorite = favorites.some(fav => fav.id === Number(id));

  useEffect(() => {
    ProductService.getSingleProductService(id)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleQuantityPlus = () => {
    if (countProduct < (singleProduct?.stock || 1)) {
      setCountProduct(countProduct + 1);
    }
  };

  const handleQuantityMinus = () => {
    if (countProduct > 1) {
      setCountProduct(countProduct - 1);
    }
  };

  const handleAddToCart = () => {
    if (!singleProduct) return;
    dispatch(saveInCartAction({ ...singleProduct, count: countProduct }));
    navigate('/cartPage');
  };

  const handleToggleFavorite = () => {
    dispatch(updateFavoriteAction(singleProduct));
  };

  if (!isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <div className='mainContainer'>
        <div className='leftSide'>
          <img
            src={singleProduct.images[currentImage]}
            alt={singleProduct.title}
            className='responsive-image'
          />
          <div className='images'>
            {singleProduct.images.map((el, index) => (
              <img
                key={index}
                src={el}
                alt={`${singleProduct.title} ${index}`}
                onClick={() => setCurrentImage(index)}
                style={{
                  width: window.innerWidth <= 768 ? '70px' : '100px',
                  height: window.innerWidth <= 768 ? '70px' : '100px',
                  padding: '10px',
                  borderRadius: '12px',
                  border: currentImage === index
                    ? '1px solid #003F62'
                    : '1px solid #B6B6B6',
                  cursor: 'pointer',
                  marginLeft: window.innerWidth <= 768 ? '5px' : '40px',
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>

        <div className='rightSide'>
          <h2>{singleProduct.title}</h2>
          <h5>${singleProduct.price}</h5>
          <Rating value={singleProduct.rating} readOnly />
          <div className='availability'>
            <span style={{ color: '#6B7280' }}>Availability: </span>
            {singleProduct.stock > 0 ? (
              <h3 className='availabilityIcon'>
                <FaCheck size={24} /> In Stock
              </h3>
            ) : (
              <h3 className='availabilityIcon' style={{ color: 'red' }}>
                <RxCross2 size={24} /> Out of Stock
              </h3>
            )}
          </div>

          <p>
            Hurry up! only <span style={{ color: '#003F62', fontWeight: '700' }}>{singleProduct.stock}</span> product left in stock!
          </p>

          <div className='tags'>
            <p style={{ color: '#6B7280' }}> Tags:</p>
            <ul>
              {singleProduct.tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          </div>

          <div className='quantity'>
            <p style={{ color: '#6B7280' }}>Quantity:</p>
            <div>
              <button onClick={handleQuantityMinus} disabled={countProduct <= 1} className='addQuantity'>-</button>
              <span className='addQuantity' style={{ padding: '0 20px' }}>{countProduct}</span>
              <button onClick={handleQuantityPlus} disabled={countProduct >= singleProduct.stock} className='addQuantity'>+</button>
            </div>
          </div>

          <div className='addCart'>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <div
              style={{
                backgroundColor: isFavorite ? '#FFC0CB' : '#EEE',
                borderRadius: '9999px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={handleToggleFavorite}>
              <CiHeart size={30} color={isFavorite ? 'red' : 'black'} />
            </div>
          </div>

          <hr />

          <div className='shipping'>
            <CiDeliveryTruck size={30} />
            <span style={{ color: '#B6B6B6' }}>{singleProduct.shippingInformation}</span>
          </div>
          <p style={{ fontWeight: 600, color: '#6B7280' }}>{singleProduct.returnPolicy}</p>
        </div>
      </div>
    </Container>
  );
}

export default SingleProductPage;
