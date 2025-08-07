import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	updateProductQuantity,
	deleteFromCartAction,
	clearCart,
} from '../../store/cartSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from './CartPageStyled';
import { TiDeleteOutline } from 'react-icons/ti';

function CartPage() {
	const cart = useSelector((state) => state.cartStore.cart);
	const totalProduct = useSelector(
		(state) => state.cartStore.totalProduct
	);
	const dispatch = useDispatch();

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.cartTotal,
		0
	);

	return (
		<Container>
			<div className='mainContainer'>
				<TableContainer component={Paper} className='tableContainer'>
					<Table sx={{ minWidth: 650 }} aria-label='cart table'>
						<TableHead className='tableHead'>
							<TableRow>
								<TableCell className='tableCellTop'>
									Product
								</TableCell>
								<TableCell className='tableCellTop' align='right'>
									Price
								</TableCell>
								<TableCell className='tableCellTop' align='right'>
									Quantity
								</TableCell>
								<TableCell className='tableCellTop' align='right'>
									Subtotal
								</TableCell>
								<TableCell className='tableCellTop' align='right'>
									Remove
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{cart.map((product) => (
								<TableRow key={product.id}>
									<TableCell className='productShown'>
										<img
											src={product.thumbnail}
											alt={product.title}
											width='50'
											height='50'
										/>
										<h3>{product.title}</h3>
									</TableCell>
									<TableCell align='right'>
										${product.price}
									</TableCell>
									<TableCell align='right'>
										<button
											onClick={() =>
												dispatch(
													updateProductQuantity({
														productId: product.id,
														amount: -1,
													})
												)
											}
											disabled={product.count <= 1}>
											-
										</button>
										<span style={{ padding: '0 10px' }}>
											{product.count}
										</span>
										<button
											onClick={() =>
												dispatch(
													updateProductQuantity({
														productId: product.id,
														amount: 1,
													})
												)
											}
											disabled={product.count >= product.stock}>
											+
										</button>
									</TableCell>
									<TableCell align='right'>
										${product.cartTotal.toFixed(2)}
									</TableCell>
									<TableCell align='right'>
										<button
											className='removeButton'
											onClick={() =>
												dispatch(deleteFromCartAction(product.id))
											}
											aria-label='Remove item'
											title='Remove item'>
											<TiDeleteOutline size={24} color='red' />
										</button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</Container>
	);
}

export default CartPage;
