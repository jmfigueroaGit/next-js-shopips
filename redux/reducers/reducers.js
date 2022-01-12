import { combineReducers } from 'redux';

import { getProductsReducer, getProductReducer } from './productReducer';
import { loadUserReducer, registerReducer, loginUser } from './userReducer';
const reducer = combineReducers({
	getProducts: getProductsReducer,
	getProduct: getProductReducer,
	loadUser: loadUserReducer,
	register: registerReducer,
	login: loginUser,
});

export default reducer;
