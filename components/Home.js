import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from './layout/Banner';
import LowerBanner from './layout/BannerItems/LowerBanner';
import FeaturedProducts from './Products/FeaturedProducts';
import LatestProducts from './Products/LatestProducts';

import { clearErrors, getProducts } from '../redux/actions/productAction';
import { toast } from 'react-toastify';

export default function Home() {
	const dispatch = useDispatch();

	const { products, error, loading } = useSelector(
		(state) => state.getProducts
	);

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearErrors());
		}
	}, [dispatch, error]);
	return (
		<div>
			<Banner title="Multimedia Products" />
			{products && <LatestProducts products={products} />}
			<LowerBanner />
			{products && <FeaturedProducts products={products} />}
		</div>
	);
}
