import './App.css'
import Navbar from './Navbar'
import ImageSlide from './ImageSlide'
import Main from './Main'

function App() {
	const mobileView = window.innerWidth <= 645

	return (
		<div className="App">
			<Navbar mobileView={mobileView} />
			<ImageSlide />
			<Main mobileView={mobileView} />
		</div>
	)
}

export default App
