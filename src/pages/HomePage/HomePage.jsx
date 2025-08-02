import { useEffect } from 'react';
import ProductService from '../../services/ProductService';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllProductsAction } from '../../store/productSlice';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Container } from './HomePageStyled';

function HomePage() {
	const dispatch = useDispatch();
	const { allProducts, isLoading } = useSelector(
		(state) => state.productStore
	);
	useEffect(() => {
		ProductService.getAllProductsService()
			.then((res) => {
				console.log(res.data.products);
				dispatch(saveAllProductsAction(res.data.products));
			})
			.catch((err) => {
				console.log('Error fetching products:', err);
			});
	}, [dispatch]);

	return (
		<Container>
			<div>
				<span>List/Grid View</span>
			</div>
			{isLoading ? (
				<div className='cardContainerShowed'> 
					{allProducts.map((product) => {
						return <CardComponent key={product.id} product={product} />;
					})}
				</div>
			) : (
				<div>Loading...</div>
			)}
		</Container>
	);
}

export default HomePage;
