import Container from './FooterComponentStyled';
import logo from '../../assets/logo.jpg';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

function FooterComponent() {
	return (
		<Container>
			<div className='middle'>
				<h3>Get help</h3>
				<ul>
					<li>About us</li>
					<li>Contact us</li>
					<li>Privacy policy</li>
					<li>Return policy</li>
				</ul>
			</div>
			<div className='left'>
				<img src={logo} style={{ width: '100px', height: '80px' }} />
				<p>
					Witenwisstrasse 21,
					<br />
					9200 Gossau
				</p>
				<div className='photos'>
					<a
						href='mailto:ljupcho.popov97@gmail.com'
						target='_blank'
						rel='noopener noreferrer'>
						<MdEmail size={24} />
					</a>

					<a href='tel:0768056563'>
						<IoCall size={24} />
					</a>

					<a
						href='https://github.com/ljupchopopov'
						target='_blank'
						rel='noopener noreferrer'>
						<FaGithub size={24} />
					</a>

					<a
						href='https://linkedin.com/in/ljupcho-popov-200a01294'
						target='_blank'
						rel='noopener noreferrer'>
						<FaLinkedin size={24} />
					</a>
				</div>
			</div>
			<div className='right'>
				<h3>About us</h3>
				<ul>
					<li>News</li>
					<li>Service</li>
					<li>Our Policy</li>
					<li>Customer Care</li>
				</ul>
			</div>
		</Container>
	);
}

export default FooterComponent;
