import { useSelector, useDispatch } from 'react-redux';
import FavoriteContainer from './FavoritePageStyled';
import { TiDeleteOutline } from 'react-icons/ti';
import { updateFavoriteAction } from '../../store/favoriteSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function FavoritePage() {
	const favorites = useSelector(
		(state) => state.favoriteStore.allFavorite || []
	);
	const dispatch = useDispatch();

	return (
		<FavoriteContainer>
			<TableContainer component={Paper}>
				<Table>
					<TableHead className='tableHead' id='lgScreens'>
						<TableRow className='tableRow'>
							<TableCell className='tableCellTop'>Product</TableCell>
							<TableCell className='tableCellTop' align='right'>
								Price
							</TableCell>
							<TableCell className='tableCellTop' align='right'>
								Remove
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className='tableBody'>
						{favorites.map((product) => (
							<TableRow key={product.id}>
								<TableCell className='productCell'>
									<div className='productRow'>
										<img
											src={product.thumbnail}
											alt={product.title}
											width={100}
											height={100}
										/>
										<h3>{product.title}</h3>
									</div>
								</TableCell>

								<TableCell className='priceCell' align='right'>
									<h3>${product.price}</h3>
								</TableCell>

								<TableCell className='removeCell' align='right'>
									<button
										className='removeButton'
										onClick={() =>
											dispatch(updateFavoriteAction(product))
										}
										aria-label='Remove favorite'
										title='Remove favorite'>
										<TiDeleteOutline size={24} color='red' />
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</FavoriteContainer>
	);
}

export default FavoritePage;
