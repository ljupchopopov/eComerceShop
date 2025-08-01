import { useEffect, useState } from 'react';
import CategoryService from '../../services/CategoryService';
import { Container } from './CategoryComponentStyled';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllCategoryAction } from '../../store/categorySlice';

function CategoryComponent() {
	const [toggleCategory, setToggleCategory] = useState(false);

	const { allCategory, isLoading } = useSelector(
		(state) => state.categoryStore
	);
	const dispatch = useDispatch();

	useEffect(() => {
		CategoryService.getAllCategory()
			.then((res) => {
				dispatch(saveAllCategoryAction(res.data));
			})
			.catch((err) => {
				console.error(err);
			});
	}, [dispatch]);

	return (
		<Container>
			<div className='mainDiv'>
				<button onClick={() => setToggleCategory((prev) => !prev)}>
					{toggleCategory ? 'Hide Categories' : 'Show All Category'}
				</button>

				{!isLoading ? (
					<div>Loading Category...</div>
				) : (
					toggleCategory && (
						<ul>
							{allCategory.map((cat, index) => (
								<li key={index}>{cat}</li>
							))}
						</ul>
					)
				)}
			</div>
		</Container>
	);
}

export default CategoryComponent;
