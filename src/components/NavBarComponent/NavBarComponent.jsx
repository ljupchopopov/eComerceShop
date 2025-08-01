import Container from './NavBarStyled';
import logo from '../../assets/данти.jpg';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

// icons
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import styled from 'styled-components';

// Wrapper to align icon + text/buttons with consistent gap
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; 
`;


const StyledUserButton = styled(UserButton)`
  .cl-userButtonTrigger {
    color: white;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    padding: 8px 16px;
    border-radius: 8px;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
`;


const StyledSignInButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
`;

function NavBarComponent() {
  return (
    <Container>
      <div className='leftSide'>
        <img
          src={logo}
          alt='logo-image'
          style={{ width: '100px', height: '80px' }}
        />
      </div>

      <div className='middleSide'>
        <input type='text' placeholder='Search..' />
        <button>Search</button>
      </div>

      <div className='rightSide'>
        {/* Group user icon and login/signin button inside same IconWrapper */}
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

        {/* Favorite */}
        <div className='icons'>
          <IconWrapper>
            <CiHeart size={24} color='white' />
            <span className='spanNumber'>0</span>
            <span className='spanText'>Favorite</span>
          </IconWrapper>
        </div>

        {/* Cart */}
        <div className='icons'>
          <IconWrapper>
            <CiShoppingCart size={24} color='white' />
            <span className='spanNumber'>0</span>
            <span className='spanText'>Cart</span>
          </IconWrapper>
        </div>
      </div>
    </Container>
  );
}

export default NavBarComponent;
