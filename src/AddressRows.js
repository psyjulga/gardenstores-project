const AddressRows = (props) => {
	const { addressRowData } = props
	const { street, zip, city } = addressRowData

	return (
		<span>
			<address>{street}</address>
			<address>
				{zip} {city}
			</address>
		</span>
	)
}

export default AddressRows
