import { useState } from 'react'
import GardenStore from './GardenStore'

const GardenStores = ({ mobileView }) => {
	const dataJson = require('./fake_api/data.json')
	const data = dataJson['GardenStores']

	const [gardenStores, setGardenStores] = useState(
		data.filter((d) => data.indexOf(d) < 5)
	)

	const downloadMoreStores = () => {
		if (gardenStores.length === data.length)
			alert('There are no more Stores available at the moment.')
		else
			setGardenStores(
				data.filter((d) => data.indexOf(d) < gardenStores.length + 5)
			)
	}

	return (
		<main className="main">
			<h1 className="main-headline">Compare Your Garden Stores</h1>
			<ul className="garden-stores">
				{gardenStores.map((store, index) => (
					<GardenStore key={index} store={store} mobileView={mobileView} />
				))}
			</ul>
			<button onClick={downloadMoreStores} className="download-button">
				Download More Garden Stores
			</button>
		</main>
	)
}

export default GardenStores
