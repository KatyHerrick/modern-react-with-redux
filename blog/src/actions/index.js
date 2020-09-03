import jsonPlaceholder from '../apis/jsonPlaceholder';

// Despite the syntax, this just returns an async function
// that manually dispatches an action with the results of the
// aync API call.
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};