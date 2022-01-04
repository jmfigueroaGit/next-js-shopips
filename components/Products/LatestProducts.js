import Image from 'next/image';
import Product from './Product';

export default function LatestProducts() {
	return (
		<div className="m-3 text-gray-600">
			<h1 className="text-xl font-bold">Latest Products</h1>
			<div className="flex-row justify-around group sm:flex">
				<Product
					url="/images/photo-1.png"
					brand="Apple"
					name="iPhone 13"
					price="$ 500.54"
					size="w-48 sm:w-56"
				/>
				<Product
					url="/images/photo-2.png"
					brand="Apple"
					name="iPhone XR"
					price="$ 500.54"
					size="w-48 sm:w-56"
				/>{' '}
				<Product
					url="/images/photo-3.png"
					brand="Apple Headphone"
					name="iPhone 13"
					price="$ 500.54"
					size="w-48 sm:w-56"
				/>
			</div>
		</div>
	);
}
