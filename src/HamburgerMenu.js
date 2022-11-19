const HamburgerMenu = ({ onClick, showMenu }) => {
	return (
		<button className="hamburger-menu" onClick={onClick}>
			{showMenu ? '^' : 'v'}
		</button>
	)
}

export default HamburgerMenu
