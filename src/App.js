import './App.css'
import Navbar from './Navbar'
import ImageSlide from './ImageSlide'
import GardenStores from './GardenStores'

function App() {
	const mobileView = window.innerWidth <= 645

	return (
		<div className="App">
			<Navbar mobileView={mobileView} />
			<ImageSlide />
			<GardenStores mobileView={mobileView} />
		</div>
	)
}

export default App
