import { HeartIcon } from '@heroicons/react/outline';

export default function ProductDetails() {
	return (
		<div>
			<div className="flex flex-col sm:flex-row sm:justify-evenly">
				<div className="flex items-center justify-center">
					<img
						src={'/images/photo-1.png'}
						alt="photo.png"
						className={`w-56 sm:w-96`}
					/>
				</div>
				<div className="flex flex-col mx-2 mb-3 text-gray-900 sm:w-6/12 sm:mt-10">
					<h1 className="text-xl font-bold">MacBook Air (M1, 2020)</h1>
					<h3 className="font-bold text-red-700">$ 1000.00 - $ 4000.00</h3>
					<h4 className="font-bold ">
						Available:{' '}
						<span className="font-medium text-red-700">In Stock</span>
					</h4>
					<p className="mt-2 font-serif text-justify indent-5">
						Our thinnest, lightest notebook, completely transformed by the Apple
						M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster.
						Our most advanced Neural Engine for up to 9x faster machine
						learning.
					</p>
					<br />
					<div className="flex items-center float-left mb-3 mr-5 sm:my-5">
						<button
							type="submit"
							className="inline-flex justify-center px-10 py-2 text-sm font-medium text-white bg-red-600 border border-transparent shadow-sm rounded-3xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Add to Cart
						</button>
						<HeartIcon className="h-8 p-1 mx-2 text-gray-100 bg-red-600 rounded-full ring-2 ring-white hover:bg-red-700" />
					</div>
					<hr />
					<div className="grid grid-cols-1 mt-2 text-gray-900 lg:grid-cols-2">
						<h1 className="font-bold">
							Product Id: <span className="font-light">123-123-312-31</span>
						</h1>
						<h1 className="font-bold">
							Tags:{' '}
							<span className="font-light">Phone Electronic Technology</span>
						</h1>
						<h1 className="font-bold">
							Categories: <span className="font-light">Phones Smartphones</span>
						</h1>
					</div>
				</div>
				<br />
			</div>
			<div className="m-2 text-gray-900 sm:m-3">
				<h1 className="text-xl font-bold">Description</h1>
				<p className="mx-2 mt-2 font-light text-justify indent-3">
					M1 has the fastest CPU we{'’'}ve ever made. With that kind of
					processing speed, MacBook Air can take on new extraordinarily
					intensive tasks like professional-quality editing and action-packed
					gaming. But the 8{'‑'}core CPU on M1 isn{'‘'}t just up to 3.5x faster
					than the previous generation2 — it balances high-performance cores
					with efficiency cores that can still crush everyday jobs while using
					just a tenth of the power.
				</p>
			</div>
			<div className="m-2 text-gray-900 sm:m-3">
				<h1 className="text-xl font-bold">Reviews (0)</h1>
			</div>
		</div>
	);
}
