import {
	ALL_PRODUCT_REQUEST,
	ALL_PRODUCT_SUCCESS,
	ALL_PRODUCT_FAILED,
	SINGLE_PRODUCT_REQUEST,
	SINGLE_PRODUCT_SUCCESS,
	SINGLE_PRODUCT_FAILED,
	CLEAR_ERROR,
} from '../constants/productConstant';

export const getProductsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case ALL_PRODUCT_REQUEST:
			return {
				loading: true,
			};
		case ALL_PRODUCT_SUCCESS:
			return {
				loading: false,
				products: action.payload.products,
			};
		case ALL_PRODUCT_FAILED:
			return { loading: false, error: action.payload };
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};

export const getProductReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case SINGLE_PRODUCT_REQUEST:
			return {
				loading: true,
			};
		case SINGLE_PRODUCT_SUCCESS:
			return {
				loading: false,
				product: action.payload,
			};
		case SINGLE_PRODUCT_FAILED:
			return { loading: false, error: action.payload };
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};
