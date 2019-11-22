export default (id = null, action) => {
	switch (action.type) {
		case 'FETCH_BY_ID':
			return action.payload;
		default:
			return id;
	}
};
