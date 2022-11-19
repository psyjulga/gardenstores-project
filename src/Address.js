import { useState } from 'react'
import PopUp from './PopUp'
import AddressLink from './AddressLink'

const Address = ({ name, address }) => {
	const [showAddress, setShowAddress] = useState(false)

	const overlayStyleActive = {
		opacity: 1,
		pointerEvents: 'all',
	}

	return (
		<span className="address-container">
			{showAddress && (
				<span>
					<PopUp name={name} address={address} hideAddress={setShowAddress} />
					<div
						id="overlay"
						style={showAddress ? overlayStyleActive : null}
					></div>
				</span>
			)}

			<AddressLink clicked={showAddress} showAddress={setShowAddress} />
		</span>
	)
}

export default Address
