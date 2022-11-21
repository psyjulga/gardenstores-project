import AddressCloseButton from './AddressCloseButton'
import Name from './Name'
import WebsiteLink from './WebsiteLink'
import AddressRows from './AddressRows'

const PopUp = (props) => {
	const { name, address, hideAddress } = props
	const { street, zip, city, website } = address

	const addressRowData = { street, zip, city }

	return (
		<div className="pop-up">
			<div className="pop-up-header">
				<Name name={name} />
				<AddressCloseButton
					onClick={() => hideAddress(false)}
					cssClass="pop-up-close-button"
					symbol="&times;"
				/>
			</div>
			<AddressRows addressRowData={addressRowData} />
			<br />
			<WebsiteLink website={website} />
		</div>
	)
}

export default PopUp
