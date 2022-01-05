import Image from 'next/image';
import Product from './Product';

export default function LatestProducts({ products }) {
	let featured = products.filter((e) => e.isFeatured === true);

	return (
		<div className="m-3 text-gray-600">
			<h1 className="text-xl font-bold">Latest Products</h1>
			<div className="flex-row justify-around group sm:flex">
				{featured.map((product) => (
					<Product key={product._id} product={product} size="w-48 sm:w-56" />
				))}
			</div>
		</div>
	);
}
