const Rating = ({ rating }) => {
	const full = '๐'
	const half = '๐'
	const empty = '๐งก'

	let hearts = []

	for (let i = 0; i < 5; i++) {
		if (i < rating) hearts.push(full)
		else hearts.push(empty)
	}

	if ((rating * 2) % 2 !== 0) hearts[rating - 0.5] = half

	return <span className="rating">{hearts.join('')}</span>
}

export default Rating
