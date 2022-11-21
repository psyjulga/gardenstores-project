import { useState } from 'react'
import PopUp from './PopUp'
import AddressLink from './AddressLink'
import AddressCard from './AddressCard'

const Address = (props) => {
	const { name, address, mobileView } = props

	const [showAddress, setShowAddress] = useState(false)

	const overlayStyleActive = {
		opacity: 1,
		pointerEvents: 'all',
	}

	return (
		<span className="address-container">
			{showAddress && !mobileView ? (
				<span>
					<PopUp name={name} address={address} hideAddress={setShowAddress} />
					<div id="overlay" style={overlayStyleActive}></div>
				</span>
			) : null}

			<AddressLink
				clicked={showAddress}
				showAddress={showAddress}
				setShowAddress={setShowAddress}
				mobileView={mobileView}
			/>

			{showAddress && mobileView ? (
				<AddressCard name={name} address={address} />
			) : null}
		</span>
	)
}

export default Address
