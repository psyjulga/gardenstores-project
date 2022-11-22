import './App.css'
import Navbar from './Navbar'
import ImageSlide from './ImageSlide'
import GardenStores from './GardenStores'
import Footer from './Footer'

function App() {
	const mobileView = window.innerWidth <= 645

	return (
		<div className="App">
			<Navbar mobileView={mobileView} />
			<ImageSlide />
			<GardenStores mobileView={mobileView} />
			<Footer />
		</div>
	)
}

export default App
