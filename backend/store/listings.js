const listings = [
	{
		id: 201,
		title: "Choco Lava Cake",
		images: [{ fileName: "dc71c93648f6c493a2d921acc0b030a3" }],
		price: 30,
		categoryId: 1,
		userId: 1,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 3,
		title: "Fried Chicken Burger",
		images: [{ fileName: "4fe30581afda2af73cadeb173516dd94" }],
		categoryId: 2,
		price: 50,
		userId: 1,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 2,
		title: "Homemade Idli with Sambar",
		description:
			"Free food for the needy",
		images: [
			{ fileName: "3c0f095ba06173b5cb2b914392dfaa28" },
		],
		price: 1,
		categoryId: 3,
		userId: 1,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	
];

const addListing = (listing) => {
	listing.id = listings.length + 1;
	listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
	addListing,
	getListings,
	getListing,
	filterListings,
};
