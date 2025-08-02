import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../../services/ProductService';
import { Container } from './SingleProductPageStyled';
import Rating from '@mui/material/Rating';

//icons
import { FaCheck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { CiHeart } from 'react-icons/ci';
import { CiDeliveryTruck } from 'react-icons/ci';

function SingleProductPage() {
	const [singleProduct, setSingleProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const [countProduct, setCountProduct] = useState(1);

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/cartPage`);
	};

	let { id } = useParams();

	useEffect(() => {
		ProductService.getSingleProductService(id)
			.then((res) => {
				setSingleProduct(res.data);
				setIsLoading(true);
			})
			.catch((err) => console.log(err));
	}, []);

	function handleImage(index) {
		setCurrentImage(index);
	}

	return (
		<Container>
			{isLoading ? (
				<div className='mainContainer'>
					{/* LEFT SIDE */}
					<div className='leftSide'>
						<img
							src={singleProduct.images[currentImage]}
							alt=''
							className='responsive-image'
						/>
						<div className='images'>
							{singleProduct.images.map((el, index) => {
								return (
									<img
										key={index}
										src={el}
										alt=''
										style={{
											width:
												window.innerWidth <= 768 ? '70px' : '100px', // smaller images on mobile
											height:
												window.innerWidth <= 768 ? '70px' : '100px',
											padding: '10px',
											borderRadius: '12px',
											border:
												currentImage === index
													? '1px solid #003F62'
													: '1px solid #B6B6B6',
											cursor: 'pointer',
											marginLeft:
												window.innerWidth <= 768 ? '5px' : '40px', // smaller margin on mobile
											flexShrink: 0, // prevent shrinking inside flex container
										}}
										onClick={() => handleImage(index)}
									/>
								);
							})}
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div className='rightSide'>
						<h2>{singleProduct.title}</h2>
						<h5>${singleProduct.price}</h5>
						<Rating value={singleProduct.rating} readOnly />
						<div className='availability'>
							<span style={{ color: '#6B7280' }}>Availability: </span>
							{singleProduct.stock > 0 ? (
								<h3 className='availabilityIcon'>
									<FaCheck size={24} />
									In Stock
								</h3>
							) : (
								<h3
									className='availabilityIcon'
									style={{ color: 'red' }}>
									<RxCross2 size={24} />
									Out of Stock
								</h3>
							)}
						</div>
						<p>
							Hurry up! only{' '}
							<span style={{ color: '#003F62', fontWeight: '700' }}>
								{singleProduct.stock}
							</span>{' '}
							product left in stock!
						</p>
						<div className='tags'>
							<p style={{ color: '#6B7280' }}> Tags:</p>
							<ul>
								{singleProduct.tags.map((tag, index) => {
									return <li key={index}>#{tag}</li>;
								})}
							</ul>
						</div>

						<div className='quantity'>
							<p style={{ color: '#6B7280' }}>Quantity:</p>
							<div>
								<button className='addQuantity'>-</button>
								<span
									className='addQuantity'
									style={{
										paddingLeft: '20px',
										paddingRight: '20px',
									}}>
									{countProduct}
								</span>
								<button className='addQuantity'>+</button>
							</div>
						</div>
						<div className='addCart'>
							<button onClick={handleNavigate}>Add to Cart</button>
							<div
								style={{
									backgroundColor: '#EEE',
									borderRadius: '9999px',
									width: '40px',
									height: '40px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<CiHeart size={30} />
							</div>
						</div>
						<hr />
						<div className='shipping'>
							<CiDeliveryTruck size={30} style={{ color: 'black' }} />
							<span style={{ color: '#B6B6B6' }}>
								{singleProduct.shippingInformation}
							</span>
						</div>
						<p style={{ fontWeight: 600, color: '#6B7280' }}>
							{singleProduct.returnPolicy}
						</p>
					</div>
				</div>
			) : (
				<div>Loading..</div>
			)}
		</Container>
	);
}

export default SingleProductPage;
