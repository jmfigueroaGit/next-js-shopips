import Product from './Product';

export default function FeaturedProducts() {
	return (
		<div className="m-3 text-gray-600">
			<h1 className="text-xl font-bold">Featured Products</h1>
			<div className="flex-row justify-around grid-cols-2 mx-3 group sm:grid md:grid-cols-3 lg:grid-cols-4">
				<Product
					url="/images/photo-1.png"
					brand="Apple"
					name="iPhone 13"
					price="$ 500.54"
					size="max-h-40"
				/>
				<Product
					url="/images/photo-2.png"
					brand="Apple"
					name="iPhone XR"
					price="$ 500.54"
					size="max-h-40"
				/>{' '}
				<Product
					url="/images/photo-3.png"
					brand="Apple Headphone"
					name="iPhone 13"
					price="$ 500.54"
					size="max-h-40"
				/>
				<Product
					url="/images/photo-4.png"
					brand="Apple"
					name="iPhone 13"
					price="$ 500.54"
					size="max-h-40"
				/>
				<Product
					url="/images/photo-5.png"
					brand="Apple"
					name="iPhone XR"
					price="$ 500.54"
					size="max-h-40"
				/>{' '}
				<Product
					url="/images/photo-6.png"
					brand="Apple Headphone"
					name="iPhone 13"
					price="$ 500.54"
					size="max-h-40"
				/>
				<Product
					url="/images/photo-7.png"
					brand="Apple"
					name="iPhone 13"
					price="$ 500.54"
					size="max-h-40"
				/>
				<Product
					url="/images/photo-8.png"
					brand="Apple"
					name="iPhone XR"
					price="$ 500.54"
					size="max-h-40"
				/>
			</div>
		</div>
	);
}
