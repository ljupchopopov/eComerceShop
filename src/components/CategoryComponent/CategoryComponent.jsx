import { useEffect, useState } from 'react';
import CategoryService from '../../services/CategoryService';
import { Container } from './CategoryComponentStyled';

function CategoryComponent() {
	const [allCategory, setAllCategory] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		CategoryService.getAllCategory()
			.then((res) => {
				console.log(res.data);
				setAllCategory(res.data);
				setIsLoading(true);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<Container>
			<div className='mainDiv'>
				<button>Show Category</button>

				{isLoading ? (
					<div>Category</div>
				) : (
					<div>Loading Category</div>
				)}
			</div>
		</Container>
	);
}

export default CategoryComponent;
