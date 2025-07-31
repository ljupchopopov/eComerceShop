// icons
import { CiLocationOn, CiDeliveryTruck} from 'react-icons/ci';
import { IoMdClose } from "react-icons/io";

import Container from './HeaderComponentStyled';

function HeaderComponent({setActiveHeader}) {
	return (
		<Container>

				<p>
					Need help? Call us:{' '}
					<a  href='tel:+41768056563'>(+41) 76 805 65 63</a>
				</p>
			

			<div className='right'>
				<div className='item'>
					<CiLocationOn size={24} />
					<span>Our Store</span>
				</div>
				<div className='item'>
					<CiDeliveryTruck size={24} />
					<span>Track your order</span>
				</div>
        <IoMdClose size={24} onClick={() => {
          setActiveHeader(false)
        }} />

			</div>
		</Container>
	);
}

export default HeaderComponent;
