const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload];

		case "DELETE":
			return state.filter((item) => item.id !== action.payload);

		case "DELETE ALL":
			return [];

		case "EDIT":
			return state.map((item) =>
				item.id === action.payload.id
					? { ...item, title: action.payload.title }
					: item
			);

		case "CHECKBOX":
			return state.map((item) =>
				item.id === action.payload.id
					? { ...item, isChecked: action.payload.isChecked }
					: item
			);

		default:
			return state;
	}
};

export default todoReducer;
