import jsonPlaceholer from '../apis/jsonPlaceholder';
import axios from 'axios';

const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholer.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response });
};

const getId = (id) => {
	return {
		type: 'FETCH_BY_ID',
		payload: id
	};
};
const getNameById = () => async (dispatch) => {
	const names = {};
	await [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map((i) =>
		axios.get(`https://jsonplaceholder.typicode.com/users/${i}`).then((res) => {
			const n = {}
			const id = `person_${i}`;
			n[id] = res.data.name
			// console.log(id)
			Object.assign(names, n)
		})
	);
	dispatch({ type: 'GET_NAME_BY_ID', payload: names });
};
export { fetchPosts, getId, getNameById };
