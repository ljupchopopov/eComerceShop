// HomePage.jsx
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../../store/productSlice";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Container } from "./HomePageStyled";

function HomePage() {
  const dispatch = useDispatch();

  const { allProducts, isLoading, selectCategory, searchProduct } = useSelector(
    (state) => state.productStore
  );
  const [limitProducts, setLimitProducts] = useState(10);

  useEffect(() => {
    if (searchProduct) {
      ProductService.getSearchProducts(searchProduct)
        .then((res) => {
          dispatch(saveAllProductsAction(res.data.products));
        })
        .catch((err) => {
          console.error("Error searching products:", err);
        });
    } else if (selectCategory) {
      ProductService.getAllProductsByCategory(selectCategory)
        .then((res) => {
          dispatch(saveAllProductsAction(res.data.products));
        })
        .catch((err) => {
          console.error("Error fetching category products:", err);
        });
    } else {
      ProductService.getAllProductsService(limitProducts)
        .then((res) => {
          dispatch(saveAllProductsAction(res.data.products));
        })
        .catch((err) => {
          console.error("Error fetching all products:", err);
        });
    }
  }, [dispatch, selectCategory, searchProduct, limitProducts]);

 
  function handleViewMore() {
    setLimitProducts((prevLimit) => prevLimit + 10);
  }

  return (
    <Container>
      {isLoading ? (
        <div className="cardContainerShowed">
          {allProducts.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div className="viewMore" >
        <button onClick={handleViewMore}>View More Products</button>
		
      </div>
    </Container>
  );
}

export default HomePage;
