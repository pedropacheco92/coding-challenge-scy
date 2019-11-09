import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return <div>
        <Link to="/">Pending</Link>
        <Link to="/completed">completed</Link>
	</div>;
};

export default Menu;
