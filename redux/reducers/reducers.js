import { combineReducers } from 'redux';

import { getProductsReducer, getProductReducer } from './productReducer';
const reducer = combineReducers({
	getProducts: getProductsReducer,
	getProduct: getProductReducer,
});

export default reducer;
