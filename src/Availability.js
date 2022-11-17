const Availability = (props) => {
	const { trees, plants, bio } = props

	return (
		<span>
			Trees {trees} Plants {plants} Bio {bio}
		</span>
	)
}

export default Availability
