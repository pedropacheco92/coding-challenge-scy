import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeMenu, openMenu } from '../redux/actions/menuActions'
import '../sass/Menu.scss'

const Menu = () => {
	const { opened } = useSelector((state: any) => state.menu)
	const dispatch = useDispatch();

	const handleMenuClick = () => {
		if (opened) {
			dispatch(closeMenu())
		} else {
			dispatch(openMenu())
		}
	}

	const classNameMenu = opened ? 'menu-container menu-container-opened' : 'menu-container'

	return (
		<div className={classNameMenu}>
			<div onClick={handleMenuClick} className='hamburger-menu'></div>
			{opened ? (<div onClick={() => dispatch(closeMenu())} className='menu-items-container'>
				<Link to="/">Pending</Link>
				<Link to="/completed">Completed</Link>
			</div>) : null}
		</div>
	)
}

export default Menu
