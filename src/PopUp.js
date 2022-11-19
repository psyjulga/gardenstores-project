const PopUp = (props) => {
	const { name, address, hideAddress } = props
	const { street, zip, city, website } = address

	return (
		<div className="pop-up">
			<div className="pop-up-header">
				<h1 className="pop-up-headline">{name}</h1>
				<button
					className="pop-up-close-button"
					onClick={() => hideAddress(false)}
				>
					&times;
				</button>
			</div>

			<address>{street}</address>
			<address>
				{zip} {city}
			</address>
			<a
				className="website-link"
				href={website}
				target="_blank"
				rel="noreferrer"
			>
				Go To Webpage
			</a>
		</div>
	)
}

export default PopUp
