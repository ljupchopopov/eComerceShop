import { useEffect, useRef, useState } from 'react';
import CategoryService from '../../services/CategoryService';
import { Container } from './CategoryComponentStyled';
import { useDispatch, useSelector } from 'react-redux';
import { saveAllCategoryAction } from '../../store/categorySlice';
import { saveSelectCategoryAction } from '../../store/productSlice';
import { useNavigate } from 'react-router-dom';

function CategoryComponent() {
	const [toggleCategory, setToggleCategory] = useState(false);
	const timeoutRef = useRef(null);

	const navigate = useNavigate();

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

	function handleClick() {
		navigate('/');
	}

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
						<div
							onMouseLeave={() => {
								timeoutRef.current = setTimeout(() => {
									setToggleCategory(false);
								}, 1200);
							}}
							onMouseEnter={() => {
								if (timeoutRef.current) {
									clearTimeout(timeoutRef.current);
								}
							}}>
							<ul>
								<li
									style={{ fontSize: '15px' }}
									onClick={() => {
										dispatch(saveSelectCategoryAction(''));
										handleClick();
									}}>
									All Categories
								</li>
								{allCategory.map((cat, index) => (
									<li
										key={index}
										onClick={() =>
											dispatch(saveSelectCategoryAction(cat))
										}>
										{cat}
									</li>
								))}
							</ul>
						</div>
					)
				)}
			</div>
		</Container>
	);
}

export default CategoryComponent;
