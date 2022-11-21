import GardenStores from './GardenStores'

const Main = ({ mobileView }) => {
	return (
		<main className="main">
			<h1 className="main-headline">Compare Your Garden Stores</h1>
			<GardenStores mobileView={mobileView} />
			<button className="download-button">Download More Garden Stores</button>
		</main>
	)
}

export default Main
