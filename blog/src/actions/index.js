import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Despite the syntax, this just returns an async function
// that manually dispatches an action with the results of the
// aysnc API call.
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// Returns a memoized function that dispatches an action with the
// results of an async API call.
export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
});