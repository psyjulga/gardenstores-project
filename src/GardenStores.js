import { useState } from 'react'
import GardenStore from './GardenStore'
import SortButton from './SortButton'
import SearchForm from './SearchForm'

const GardenStores = ({ mobileView }) => {
	const dataJson = require('./fake_api/data.json')
	const data = dataJson['GardenStores']

	const firstFiveStores = data.filter((d) => data.indexOf(d) < 5)

	const [gardenStores, setGardenStores] = useState(firstFiveStores)
	const [sorted, setSorted] = useState(false)

	const downloadMoreStores = () => {
		if (gardenStores.length === data.length)
			alert('There are no more Stores available at the moment.')
		else {
			const nextFiveStores = data.filter(
				(d) => data.indexOf(d) < gardenStores.length + 5
			)
			setGardenStores(nextFiveStores)
		}
	}

	const sort = (direction) => {
		const sortedStores = gardenStores.sort((a, b) =>
			a.name.localeCompare(b.name)
		)

		if (direction === 'up') setGardenStores(sortedStores)
		if (direction === 'down') {
			const sortedReverse = sortedStores.reverse()
			setGardenStores(sortedReverse)
		}

		setSorted(!sorted)
	}

	return (
		<main className="main">
			<div className="headline-section">
				<h1 className="main-headline">Compare Your Garden Stores</h1>
				<div className="sort-buttons">
					<SortButton onClick={() => sort('up')} symbol="^" />
					<SortButton onClick={() => sort('down')} symbol={'v'} />
				</div>
			</div>

			<SearchForm gardenStores={data} setGardenStores={setGardenStores} />

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
