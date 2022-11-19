import SlideButton from './SlideButton'
import { useState } from 'react'

const ImageSlide = () => {
	const [imageNumber, setImageNumber] = useState(1)

	const slideImage = (direction) => {
		if (direction === 'right') {
			if (imageNumber === 3) setImageNumber(1)
			else setImageNumber((cur) => cur + 1)
		}
		if (direction === 'left') {
			if (imageNumber === 1) setImageNumber(3)
			else setImageNumber((cur) => cur - 1)
		}
	}

	return (
		<div className="image-slide">
			<img
				src={require(`./images/garden_${imageNumber}.jpg`)}
				alt="garden"
				width={799}
				height={586}
			/>
			<div className="slide-buttons">
				<SlideButton arrow="<" onClick={() => slideImage('left')} />
				<SlideButton arrow=">" onClick={() => slideImage('right')} />
			</div>
			<h1 className="image-headline">Try Organic Plants Now</h1>
		</div>
	)
}

export default ImageSlide
