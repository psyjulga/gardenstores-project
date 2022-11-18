const Rating = ({ rating }) => {
	const full = '💚'
	const half = '💛'
	const empty = '🧡'

	let hearts = []

	for (let i = 0; i < 5; i++) {
		if (i < rating) hearts.push(full)
		else hearts.push(empty)
	}

	if ((rating * 2) % 2 !== 0) hearts[rating - 0.5] = half

	return <span>{hearts.join('')}</span>
}

export default Rating
