import Rating from '@mui/material/Rating';
import { Container } from './CardComponentStyled';
import { useNavigate } from 'react-router-dom';

function CardComponent({ product }) {
	const navigate = useNavigate();

	const handleViewMore = () => {
		navigate(`/singleProduct/${product.id}`);
	};

	return (
		<Container>
			<div>
				<img
					src={product.thumbnail}
					alt={product.title}
					style={{ width: '100%', height: '200px' }}
				/>
			</div>
			<h3>{product.title}</h3>
			<h4>${product.price}</h4>
			<Rating
				name='read-only'
				value={product.rating}
				readOnly
				precision={0.5}
			/>
			<button onClick={handleViewMore}>View More</button>
		</Container>
	);
}

export default CardComponent;
