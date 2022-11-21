const AddressCloseButton = (props) => {
	const { onClick, cssClass, symbol } = props

	return (
		<button onClick={onClick} className={cssClass}>
			{symbol}
		</button>
	)
}

export default AddressCloseButton
