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
				street: 'Main Street 2',
				zip: 12345,
				city: 'Somewhere',
				website: url,
			},
		},
		{
			rating: 4.5,
			name: 'Savage Garden',
			trees: 'n',
			plants: 'y',
			bio: 'n',
			address: {
				street: 'Flower Street 2',
				zip: 55545,
				city: 'Nowhere',
				website: url,
			},
		},
		{
			rating: 4,
			name: 'Magic Garden',
			trees: 'y',
			plants: 'y',
			bio: 'y',
			address: {
				street: 'Diagon Alley 2',
				zip: 12321,
				city: 'Hogwarts',
				website: url,
			},
		},
		{
			rating: 2.5,
			name: "King's Garden",
			trees: 'n',
			plants: 'y',
			bio: 'y',
			address: {
				street: 'Queen Street 2',
				zip: 55555,
				city: "Salem's Lot",
				website: url,
			},
		},
		{
			rating: 5,
			name: 'Garden Heaven',
			trees: 'y',
			plants: 'y',
			bio: 'y',
			address: {
				street: 'Heaven Street 2',
				zip: 12121,
				city: 'Everywhere',
				website: url,
			},
		},
	]

	return (
		<ul className="garden-stores">
			{gardenStores.map((store, index) => (
				<GardenStore key={index} store={store} />
			))}
		</ul>
	)
}

export default GardenStores
