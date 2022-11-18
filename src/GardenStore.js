import Rating from './Rating'
import Name from './Name'
import Availability from './Availability'
import Address from './Address'

const GardenStore = (props) => {
	const { store } = props
	const { rating, name, trees, plants, bio, address } = store

	return (
		<li key={name} className="garden-store">
			<div>
				<Rating rating={rating} />
				<Name name={name} />
			</div>
			<div>
				<Availability
					trees={trees === 'y' ? '🟢' : '🔴'}
					plants={plants === 'y' ? '🟢' : '🔴'}
					bio={bio === 'y' ? '🟢' : '🔴'}
				/>
				<Address address={address} />
			</div>
		</li>
	)
}

export default GardenStore
