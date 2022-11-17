import Rating from './Rating'
import Name from './Name'
import Availability from './Availability'
import Address from './Address'

const GardenStore = (props) => {
	const { store } = props
	const { rating, name, trees, plants, bio, address } = store

	return (
		<li key={name} className="garden-store">
			<Rating rating={rating} />
			<Name name={name} />
			<Availability
				trees={trees === 'y' ? '✔' : 'X'}
				plants={plants === 'y' ? '✔' : 'X'}
				bio={bio === 'y' ? '✔' : 'X'}
			/>
			<Address address={address} />
		</li>
	)
}

export default GardenStore
