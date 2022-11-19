const AddressLink = ({ clicked, showAddress }) => {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a
			style={clicked ? { color: 'rgb(237, 31, 36)' } : null}
			onClick={() => showAddress(true)}
			className="address-link"
			href="#"
		>
			Address
		</a>
	)
}

export default AddressLink
