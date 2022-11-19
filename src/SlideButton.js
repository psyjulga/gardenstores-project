const SlideButton = ({ arrow, onClick }) => {
	return (
		<button className="slide-button" onClick={onClick}>
			{arrow}
		</button>
	)
}

export default SlideButton
