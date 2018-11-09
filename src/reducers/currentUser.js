import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/users';
import { localStorageJwtKey } from '../constants';

let initialState = null;
try {
	const jwt = localStorage.getItem(localStorageJwtKey);
	const id = localStorage.getItem('id');
	if (jwt) {
		initialState = { jwt, id };
	}
} catch (e) {
	console.log(`Couldn't get data from the current State`, e);
}

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case USER_LOGIN_SUCCESS:
			return payload;

		case USER_LOGOUT:
			return null;

		default:
			return state;
	}
}
