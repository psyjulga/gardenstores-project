import AddressCloseButton from './AddressCloseButton'

const AddressLink = (props) => {
	const { clicked, showAddress, setShowAddress, mobileView } = props

	const toggleAddress = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setShowAddress(!showAddress)
	}

	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a
			style={clicked && !mobileView ? { color: 'rgb(237, 31, 36)' } : null}
			onClick={toggleAddress}
			className="address-link"
			href="#"
		>
			Address{' '}
			{mobileView && (
				<AddressCloseButton
					onClick={() => setShowAddress(!showAddress)}
					cssClass="address-card-close-button"
					symbol={showAddress ? '^' : 'v'}
				/>
			)}
		</a>
	)
}

export default AddressLink
