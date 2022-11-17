import GardenStore from './GardenStore'

const GardenStores = () => {
	const url = 'https://github.com/psyjulga/gardenstores-project'

	const gardenStores = [
		{
			rating: 3,
			name: "Fool's Garden",
			trees: 'y',
			plants: 'y',
			bio: 'n',
			address: {
				street: 'main street 2',
				zip: 12345,
				city: 'Somewhere',
				Website: url,
			},
		},
		{
			rating: 4.5,
			name: 'Savage Garden',
			trees: 'n',
			plants: 'y',
			bio: 'n',
			address: {
				street: 'flower street 2',
				zip: 55545,
				city: 'Nowhere',
				Website: url,
			},
		},
		{
			rating: 4,
			name: 'Magic Garden',
			trees: 'y',
			plants: 'y',
			bio: 'y',
			address: {
				street: 'diagon alley 2',
				zip: 12321,
				city: 'Hogwarts',
				Website: url,
			},
		},
		{
			rating: 2,
			name: "King's Garden",
			trees: 'n',
			plants: 'y',
			bio: 'y',
			address: {
				street: 'queen street 2',
				zip: 55555,
				city: "salem's lot",
				Website: url,
			},
		},
		{
			rating: 5,
			name: 'Garden Heaven',
			trees: 'y',
			plants: 'y',
			bio: 'y',
			address: {
				street: 'heaven street 2',
				zip: 12121,
				city: 'Everywhere',
				Website: url,
			},
		},
	]

	return (
		<ul className="garden-stores">
			{gardenStores.map((store) => (
				<GardenStore store={store} />
			))}
		</ul>
	)
}

export default GardenStores
