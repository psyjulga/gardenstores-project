// import { useState, useEffect } from 'react'
import GardenStore from './GardenStore'

const GardenStores = ({ mobileView }) => {
	// const [gardenStores, setGardenStores] = useState([])

	const gardenStoresJson = require('./fake_api/data.json')
	const gardenStores = gardenStoresJson['GardenStores']

	// useEffect(() => {
	// 	fetch(path)
	// 		.then((res) => {
	// 			console.log('RES: ', res)
	// 			res.json()
	// 		})
	// 		.then((gardenStores) => setGardenStores(gardenStores))
	// }, [])

	return (
		<ul className="garden-stores">
			{gardenStores.map((store, index) => (
				<GardenStore key={index} store={store} mobileView={mobileView} />
			))}
		</ul>
	)
}

export default GardenStores
