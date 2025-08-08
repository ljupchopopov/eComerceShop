import { useSelector, useDispatch } from 'react-redux';
import {
  updateProductQuantity,
  deleteFromCartAction,
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
import { useEffect, useState } from 'react';

function CartPage() {
  const cart = useSelector((state) => state.cartStore.cart);
  const dispatch = useDispatch();

  const rawTotal = cart.reduce((acc, item) => acc + item.cartTotal, 0);

  const savedFinalTotal = localStorage.getItem('finalTotal');
  const savedCoupon = localStorage.getItem('activeCoupon');

  const [typedCoupon, setTypedCoupon] = useState('');
  const [activeCoupon, setActiveCoupon] = useState(savedCoupon || '');
  const [isCouponApplied, setIsCouponApplied] = useState(!!savedCoupon);
  const [finalTotal, setFinalTotal] = useState(
    savedFinalTotal !== null ? parseFloat(savedFinalTotal) : rawTotal
  );

  useEffect(() => {
    if (cart.length === 0) {
      setFinalTotal(0);
      setActiveCoupon('');
      setIsCouponApplied(false);
      setTypedCoupon('');
    } else if (!isCouponApplied) {
      setFinalTotal(rawTotal);
    }
  }, [rawTotal, cart.length, isCouponApplied]);

  useEffect(() => {
    localStorage.setItem('finalTotal', finalTotal);
    localStorage.setItem('activeCoupon', activeCoupon);
  }, [finalTotal, activeCoupon]);

  function handleApplyCoupon() {
    if (typedCoupon.trim().toUpperCase() === '50OFF') {
      const discounted = rawTotal * 0.5;
      setFinalTotal(discounted);
      setActiveCoupon('50OFF');
      setIsCouponApplied(true);
    } else {
      setFinalTotal(rawTotal);
      setActiveCoupon('');
      setIsCouponApplied(false);
    }
  }

  return (
    <Container>
      <div className='mainContainer'>
        <TableContainer component={Paper} className='tableContainer'>
          <Table sx={{ minWidth: 650 }} aria-label='cart table'>
            <TableHead className='tableHead' id='lgScreens'>
              <TableRow className='tableRow'>
                <TableCell className='tableCellTop'>Product</TableCell>
                <TableCell className='tableCellTop' align='right'>Price</TableCell>
                <TableCell className='tableCellTop' align='right'>Quantity</TableCell>
                <TableCell className='tableCellTop' align='right'>Subtotal</TableCell>
                <TableCell className='tableCellTop' align='right'>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className='tableBody'>
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
                  <TableCell align='right'>${product.price}</TableCell>
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
                    <span style={{ padding: '0 10px' }}>{product.count}</span>
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
                  <TableCell align='right'>${product.cartTotal.toFixed(2)}</TableCell>
                  <TableCell align='right'>
                    <button
                      className='removeButton'
                      onClick={() => dispatch(deleteFromCartAction(product.id))}
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

        <div className='right'>
          <h2>CART TOTAL</h2>
          <span className='totalPrice'>
            Total Price: ${finalTotal.toFixed(2)}
          </span>

          <div className='applyCoupon'>
            <input
              type='text'
              placeholder='Insert coupon'
              value={typedCoupon}
              onChange={(e) => setTypedCoupon(e.target.value)}
              disabled={isCouponApplied}
            />
            <span>Insert coupon for 50% discount</span>
            <span>
              Your lucky code today is{' '}
              <strong style={{ color: 'black', fontWeight: 800 }}>
                50OFF
              </strong>
            </span>
            <button
              onClick={handleApplyCoupon}
              disabled={isCouponApplied}
              style={{
                marginTop: '10px',
                backgroundColor: isCouponApplied ? '#ccc' : '#003F62', 
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: isCouponApplied ? 'not-allowed' : 'pointer',
                transition: '0.3s',
              }}>
              {isCouponApplied ? 'Coupon Applied' : 'Apply Coupon'}
            </button>
          </div>
        </div>
      </div>
	  
    </Container>
  );
}

export default CartPage;
