import {
	ALL_PRODUCT_REQUEST,
	ALL_PRODUCT_SUCCESS,
	ALL_PRODUCT_FAILED,
	SINGLE_PRODUCT_REQUEST,
	SINGLE_PRODUCT_SUCCESS,
	SINGLE_PRODUCT_FAILED,
	CLEAR_ERROR,
} from '../constants/productConstant';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_PRODUCT_REQUEST });

		const { data } = await axios.get(`http://localhost:3000/api/products`);

		dispatch({
			type: ALL_PRODUCT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: ALL_PRODUCT_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getProduct = (id) => async (dispatch) => {
	try {
		dispatch({ type: SINGLE_PRODUCT_REQUEST });

		const { data } = await axios.get(
			`http://localhost:3000/api/products/${id}`
		);

		dispatch({
			type: SINGLE_PRODUCT_SUCCESS,
			payload: data.product,
		});
	} catch (error) {
		dispatch({
			type: SINGLE_PRODUCT_FAILED,
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
