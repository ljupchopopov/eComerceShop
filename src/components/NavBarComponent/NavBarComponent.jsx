import Container from './NavBarStyled';
import logo from '../../assets/данти.jpg';

// icons
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';

function NavBarComponent() {
	return (
		<Container>
			<div className='leftSide'>
				<img
					src={logo}
					alt='logo-image'
					style={{ width: '80px', height: '60px' }}
				/>
			</div>

			{/* search bar */}
			<div className='middleSide'>
				<input type='text' placeholder='Search..' />
				<button>Search</button>
			</div>

			<div className='rightSide'>
				{/* LoginSystem Cart/Favorite */}
				<div className='icons'>
					<CiUser size={24} color='white' />
					<span className='spanText'>Login</span>
				</div>
				<div className='icons'>
					<CiHeart size={24} color='white' />
					<span className='spanNumber'>0</span>
					<span className='spanText'>Favorite</span>
				</div>
				<div className='icons'>
					<CiShoppingCart size={24} color='white' />
					<span className='spanNumber'>0</span>
					<span className='spanText'>Cart</span>
				</div>
			</div>
		</Container>
	);
}

export default NavBarComponent;
