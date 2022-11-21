import AddressRows from './AddressRows'
import Name from './Name'
import WebsiteLink from './WebsiteLink'

const AddressCard = (props) => {
	const { name, address } = props
	const { street, zip, city, website } = address

	const addressRowData = { street, zip, city }

	return (
		<div className="address-card">
			<span className="addresscard-left">
				<Name name={name} />
				<WebsiteLink website={website} />
			</span>
			<span className="addresscard-right">
				<AddressRows addressRowData={addressRowData} />
			</span>
		</div>
	)
}

export default AddressCard
