const Availability = (props) => {
	const { trees, plants, bio } = props

	return (
		<span className="availability">
			<span className="availability-item">Trees {trees}</span>
			<span className="availability-item">Plants {plants}</span>
			<span className="availability-item">Organic {bio}</span>
		</span>
	)
}

export default Availability
