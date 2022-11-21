import HamburgerMenu from './HamburgerMenu'
import Logo from './Logo'
import NavButtons from './NavButtons'
import { useState } from 'react'

const Navbar = ({ mobileView }) => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<nav className="navbar">
			<HamburgerMenu
				onClick={() => setShowMenu(!showMenu)}
				showMenu={showMenu}
			/>
			<Logo />
			<NavButtons
				style={mobileView && showMenu === false ? { display: 'none' } : null}
			/>
		</nav>
	)
}

export default Navbar
