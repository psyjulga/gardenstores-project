import Rating from './Rating'
import Name from './Name'
import Availability from './Availability'
import Address from './Address'

const GardenStore = (props) => {
	const { store, mobileView } = props
	const { rating, name, trees, plants, bio, address } = store

	return (
		<li className="garden-store">
			<div className="gardenstore-left">
				<Rating rating={rating} />
				<Name name={name} />
			</div>
			<div className="gardenstore-right">
				<Availability
					trees={trees === 'y' ? '🟢' : '🔴'}
					plants={plants === 'y' ? '🟢' : '🔴'}
					bio={bio === 'y' ? '🟢' : '🔴'}
				/>
				<Address name={name} address={address} mobileView={mobileView} />
			</div>
		</li>
	)
}

export default GardenStore
