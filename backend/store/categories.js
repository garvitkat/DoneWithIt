const categories = [
	{
		id: 1,
		name: "Vegetarian",
		icon: "food-drumstick-off-outline",
		backgroundColor: "#fc5c65",
		color: "white",
	},
	{
		id: 2,
		name: "Cars",
		icon: "car",
		backgroundColor: "#fd9644",
		color: "white",
	},
	{
		id: 3,
		name: "Cameras",
		icon: "camera",
		backgroundColor: "#fed330",
		color: "white",
	},
	{
		id: 4,
		name: "Games",
		icon: "cards",
		backgroundColor: "#26de81",
		color: "white",
	},
	{
		id: 5,
		name: "Clothing",
		icon: "shoe-heel",
		backgroundColor: "#2bcbba",
		color: "white",
	},
	{
		id: 9,
		name: "Other",
		icon: "application",
		backgroundColor: "#778ca3",
		color: "white",
	},
];

const getCategories = () => categories;

const getCategory = (id) => categories.find((c) => c.id === id);

module.exports = {
	getCategories,
	getCategory,
};
