import GardenStores from './GardenStores'

const Main = () => {
	return (
		<main className="main">
			<h1>Compare Your Garden Stores</h1>
			<GardenStores />
			<GardenStores />
			<GardenStores />
			<button className="download-button">Download More Garden Stores</button>
		</main>
	)
}

export default Main
