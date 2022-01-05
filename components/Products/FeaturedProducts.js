import Product from './Product';

export default function FeaturedProducts({ products }) {
	return (
		<div className="m-3 text-gray-600">
			<h1 className="text-xl font-bold">Featured Products</h1>
			<div className="flex-row justify-around grid-cols-2 mx-3 group sm:grid md:grid-cols-3 lg:grid-cols-4">
				{products.map((product) => (
					<Product key={product._id} product={product} size="max-h-40" />
				))}
			</div>
		</div>
	);
}
