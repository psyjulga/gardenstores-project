import { useState } from 'react'

const SearchForm = ({ gardenStores, setGardenStores }) => {
	const [input, setInput] = useState('')

	const search = (e) => {
		e.preventDefault()

		const filtered = gardenStores.filter((item) => {
			const { name, address } = item
			const { street, city, website } = address

			const loweredName = name.toLowerCase()
			const loweredStreet = street.toLowerCase()
			const loweredCity = city.toLowerCase()

			const namesArr = loweredName.split(' ')
			const streetsArr = loweredStreet.split(' ')
			const citiesArr = loweredCity.split(' ')

			const textualValuesArr = [
				...namesArr,
				...streetsArr,
				...citiesArr,
				website,
			]

			return textualValuesArr.includes(input.toLowerCase())
		})

		setGardenStores(filtered)
		setInput('')
	}

	const saveInput = (e) => {
		const { value } = e.target
		setInput(value)
	}

	return (
		<form className="search-form" onSubmit={search}>
			<input value={input} onChange={saveInput} type="text" />
			<button>Search</button>
		</form>
	)
}

export default SearchForm
