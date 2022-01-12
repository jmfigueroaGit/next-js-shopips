import axios from 'axios';
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
import absoluteUrl from 'next-absolute-url';
import Cookies from 'universal-cookie';
// Load current logged in user
export const loadUser = (req) => async (dispatch) => {
	try {
		dispatch({ type: LOAD_USER_REQUEST });

		const { origin } = absoluteUrl(req);

		const { data } = await axios.get(`${origin}/api/user`);

		dispatch({
			type: LOAD_USER_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: LOAD_USER_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Register user
export const registerUser = (userData) => async (dispatch) => {
	try {
		dispatch({ type: REGISTER_USER_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post('/api/auth/register', userData, config);

		dispatch({
			type: REGISTER_USER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: REGISTER_USER_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Login user
export const loginUser = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: AUTH_USER_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'/api/auth/login',
			{ email, password },
			config
		);

		dispatch({
			type: AUTH_USER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: AUTH_USER_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERROR,
	});
};
