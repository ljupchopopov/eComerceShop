import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from './NavBarStyled';
import logo from '../../assets/данти.jpg';
import { useNavigate } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import styled from 'styled-components';

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
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cartStore.cart); // array of products
  const uniqueItemsCountFromRedux = cart.length;

  const [cartCount, setCartCount] = useState(uniqueItemsCountFromRedux);

  useEffect(() => {
    // On mount, read unique items count from localStorage or fallback to Redux
    const savedCount = localStorage.getItem('cart_unique_count');
    if (savedCount !== null) {
      setCartCount(Number(savedCount));
    } else {
      setCartCount(uniqueItemsCountFromRedux);
    }
  }, []);

  useEffect(() => {
    // Sync Redux count of unique items with state and localStorage
    setCartCount(uniqueItemsCountFromRedux);
    localStorage.setItem('cart_unique_count', uniqueItemsCountFromRedux);
  }, [uniqueItemsCountFromRedux]);

  const handleImageClick = () => {
    navigate(`/`);
  };

  const handleCartClick = () => {
    navigate(`/cartPage`);
  };

  return (
    <Container>
      <div className='leftSide'>
        <img
          src={logo}
          alt='logo-image'
          style={{ width: '100px', height: '80px' }}
          onClick={handleImageClick}
        />
      </div>

      <div className='middleSide'>
        <input type='text' placeholder='Search..' />
        <button>Search</button>
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

        <div className='icons'>
          <IconWrapper>
            <CiHeart size={24} color='white' />
            <span className='spanNumber'>0</span>
            <span className='spanText'>Favorite</span>
          </IconWrapper>
        </div>

        <div className='icons' onClick={handleCartClick} style={{ cursor: 'pointer' }}>
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
