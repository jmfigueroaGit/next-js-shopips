import {
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAILED,
	REGISTER_USER_REQUEST,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILED,
	AUTH_USER_REQUEST,
	AUTH_USER_SUCCESS,
	AUTH_USER_FAILED,
	AUTH_USER_LOGOUT,
	CLEAR_ERROR,
} from '@/constants/userConstant';

// Load current logged in user
export const loadUserReducer = (
	state = { loading: true, user: null },
	action
) => {
	switch (action.type) {
		case LOAD_USER_REQUEST:
			return {
				loading: true,
				isAuthenticated: false,
			};
		case LOAD_USER_SUCCESS:
			return {
				loading: false,
				isAuthenticated: true,
				user: action.payload,
			};
		case LOAD_USER_FAILED:
			return {
				loading: false,
				isAuthenticated: false,
				error: action.payload,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

// Register user
export const registerReducer = (state = { user: null }, action) => {
	switch (action.type) {
		case REGISTER_USER_REQUEST:
			return {
				loading: true,
			};
		case REGISTER_USER_SUCCESS:
			return {
				loading: false,
				success: true,
				user: action.payload,
			};
		case REGISTER_USER_FAILED:
			return {
				loading: false,
				success: false,
				error: action.payload,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export const loginUser = (state = {}, action) => {
	switch (action.type) {
		case AUTH_USER_REQUEST:
			return { loading: true };
		case AUTH_USER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case AUTH_USER_FAILED:
			return { loading: false, error: action.payload };
		case AUTH_USER_LOGOUT:
			return {};
		default:
			return state;
	}
};
