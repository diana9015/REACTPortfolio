import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const active = {
		color: 'white',
	};
	const [open, setOpen] = useState(false);

	useEffect(() => {}, [open]);

	return (
		<header className={props.name}>
			<div className='wrap'>
				<h1>
					<NavLink exact to='/' activeStyle={active}>
						Variamain.
					</NavLink>
				</h1>
				<FontAwesomeIcon
					icon={faBars}
					onClick={() => {
						setOpen(!open);
					}}
					className='bars'
				/>

				{open ? (
					<div className='nav'>
						<div className='topnav'>
							<ul>
								<li>
									<NavLink to='/aboutus' activeStyle={active}>
										Aboutus
									</NavLink>
								</li>
								<li>
									<NavLink to='/member' activeStyle={active}>
										Member
									</NavLink>
								</li>
								<li>
									<NavLink to='/join' activeStyle={active}>
										Join
									</NavLink>
								</li>
							</ul>
						</div>
						<div className='bottomnav'>
							<ul>
								<li>
									<NavLink to='/gallery' activeStyle={active}>
										Gallery
									</NavLink>
								</li>
								<li>
									<NavLink to='/youtube' activeStyle={active}>
										Youtube
									</NavLink>
								</li>
								<li>
									<NavLink to='/news' activeStyle={active}>
										News
									</NavLink>
								</li>
								<li>
									<NavLink to='/contactus' activeStyle={active}>
										Contactus
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				) : null}
			</div>
		</header>
	);
}

export default Header;
