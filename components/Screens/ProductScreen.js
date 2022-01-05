import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Banner from '../layout/Banner';
import FeaturedProducts from '../Products/FeaturedProducts';
import ProductDetails from '../Products/ProductDetails';

import {
	clearErrors,
	getProduct,
	getProducts,
} from '../../redux/actions/productAction';
import { toast } from 'react-toastify';

export default function ProductScreen() {
	const dispatch = useDispatch();
	const router = useRouter();

	const { products } = useSelector((state) => state.getProducts);
	const { product, error, loading } = useSelector((state) => state.getProduct);

	const url = router.query.id;
	useEffect(() => {
		if (products && products.length === 0) {
			return dispatch(getProducts());
		}
		if (error) {
			toast.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, error, url, product, products]);
	return (
		<div>
			<Banner title="Smartphones" category="Smartphones" brand="iPhones" />
			<ProductDetails product={product} />
			{products && <FeaturedProducts products={products} />}
		</div>
	);
}
