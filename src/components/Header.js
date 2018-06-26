import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>
				{/*<li><Link to='/home'>Roster</Link></li>*/}
				<li><Link to='/somepage'>somepage</Link></li>
				<li><Link to='/articles'>articles</Link></li>
			</ul>
		</nav>
	</header>
)

export default Header;