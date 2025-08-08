import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react';
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import styled from 'styled-components';
import Container from './NavBarStyled';
import logo from '../../assets/logo.jpg';
import { saveSearchProductAction } from '../../store/productSlice';

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const StyledUserButton = styled(UserButton)`
	.cl-userButtonTrigger {
		color: white;
		background-color: ${({ theme }) => theme.colors.mainBlue};
		padding: 8px 16px;
		border-radius: 8px;
		font-size: 16px;
		display: flex !important;
		align-items: center;
		justify-content: center;
	}
`;

const StyledSignInButton = styled.button`
	background-color: ${({ theme }) => theme.colors.mainBlue};
	color: white;
	padding: 8px 16px;
	border: none;
	font-size: 16px;
	border-radius: 8px;
	cursor: pointer;
`;

function NavBarComponent() {
	const navigate = useNavigate();
  const dispatch = useDispatch()

	const cart = useSelector((state) => state.cartStore.cart);
	const favoriteTotal = useSelector(
		(state) => state.favoriteStore.favoriteTotal
	);
	const [searchProducts, setSearchProducts] = useState('');

	const [cartCount, setCartCount] = useState(cart.length);
	const [favoriteCount, setFavoriteCount] = useState(favoriteTotal);

	useEffect(() => {
		const savedCart = localStorage.getItem('cart_unique_count');
		const savedFav = localStorage.getItem('favorite_unique_count');

		if (savedCart !== null) setCartCount(Number(savedCart));
		if (savedFav !== null) setFavoriteCount(Number(savedFav));
	}, []);

	useEffect(() => {
		setCartCount(cart.length);
		localStorage.setItem('cart_unique_count', cart.length);
	}, [cart]);

	useEffect(() => {
		setFavoriteCount(favoriteTotal);
		localStorage.setItem('favorite_unique_count', favoriteTotal);
	}, [favoriteTotal]);

  function handleSearchProducts() {
    setSearchProducts('')
    dispatch(saveSearchProductAction(searchProducts))
  }

	return (
		<Container>
			<div className='leftSide'>
				<img
					src={logo}
					alt='logo'
					style={{
						width: '100px',
						height: '80px',
						cursor: 'pointer',
					}}
					onClick={() => navigate('/')}
				/>
			</div>

			<div className='middleSide'>
				<input
					value={searchProducts}
					onChange={(e) => setSearchProducts(e.target.value)}
					type='text'
					placeholder='Search..'
				/>
				<button onClick={handleSearchProducts}>Search</button>
			</div>

			<div className='rightSide'>
				<div className='icons'>
					<IconWrapper>
						<CiUser size={22} color='white' />
						<SignedOut>
							<SignInButton mode='modal'>
								<StyledSignInButton>Sign In</StyledSignInButton>
							</SignInButton>
						</SignedOut>
						<SignedIn>
							<StyledUserButton />
						</SignedIn>
					</IconWrapper>
				</div>

				<div
					className='icons'
					style={{ cursor: 'pointer' }}
					onClick={() => navigate('/favorite')}>
					<IconWrapper>
						<CiHeart size={24} color='white' />
						<span className='spanNumber'>{favoriteCount}</span>
						<span className='spanText'>Favorite</span>
					</IconWrapper>
				</div>

				<div
					className='icons'
					style={{ cursor: 'pointer' }}
					onClick={() => navigate('/cartPage')}>
					<IconWrapper>
						<CiShoppingCart size={24} color='white' />
						<span className='spanNumber'>{cartCount}</span>
						<span className='spanText'>Cart</span>
					</IconWrapper>
				</div>
			</div>
		</Container>
	);
}

export default NavBarComponent;
