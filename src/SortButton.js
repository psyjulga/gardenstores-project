const SortButton = ({ onClick, symbol }) => {
	return (
		<button className="sort-button" onClick={onClick}>
			{symbol}
		</button>
	)
}

export default SortButton
