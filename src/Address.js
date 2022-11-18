import { useState } from 'react'
import PopUp from './PopUp'
import AddressLink from './AddressLink'

const Address = ({ name, address }) => {
	const [showAddress, setShowAddress] = useState(false)

	return (
		<span className="address-container">
			{showAddress && (
				<PopUp name={name} address={address} hideAddress={setShowAddress} />
			)}

			<AddressLink clicked={showAddress} showAddress={setShowAddress} />
		</span>
	)
}

export default Address
