import React, { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/outline';

export default function ProductDetails({ product }) {
	const [value, setValue] = useState(1);

	useEffect(() => {
		if (product) setValue(1);
	}, [setValue, product]);

	const decrementHandler = (e) => {
		e.preventDefault();
		setValue(value - 1);
	};
	const incrementHandler = (e) => {
		e.preventDefault();
		setValue(value + 1);
	};

	return (
		<div className="pt-10 sm:pt-3">
			<div className="flex flex-col sm:flex-row sm:justify-evenly ">
				<div className="flex items-center justify-center">
					{product &&
						product.images?.map((image) => (
							<img
								key={image._id}
								src={image.url}
								alt="name"
								className={`w-56 sm:w-90`}
							/>
						))}
				</div>
				<div className="flex flex-col mx-2 mt-3 mb-3 text-gray-900 sm:w-6/12 sm:mt-10">
					<h1 className="flex flex-row justify-between w-full text-xl font-bold ">
						{product.name}
						<span>
							<HeartIcon className="p-1 mx-2 mb-1 ml-2 text-gray-100 bg-red-600 rounded-full h-7 ring-2 ring-white hover:bg-red-700 " />
						</span>
					</h1>

					<h3 className="font-bold text-red-700">$ {product.price}.00</h3>
					<h4 className="font-bold ">
						Available:{' '}
						<span className="font-medium text-red-700">
							{product.countInStock > 0 ? `Available` : `Out Of Stock`}
						</span>
					</h4>
					<p className="mt-2 font-serif text-justify indent-5">
						{product.description}
					</p>
					<br />
					<div className="flex items-center justify-start mb-3 mr-5 flex-rol sm:my-5 ">
						<div className="h-10 mb-2 mr-5 w-28 ">
							<div className="relative flex flex-row w-full h-10 mt-1 bg-transparent rounded-lg">
								<button
									data-action="decrement"
									className={
										value === 1 || product.countInStock === 0
											? ' bg-gray-100 text-gray-500   h-full w-20 rounded-l-2xl cursor-pointer outline-none'
											: ' bg-gray-100 text-gray-500   h-full w-20 rounded-l-2xl cursor-pointer outline-none hover:text-gray-200 hover:bg-gray-400'
									}
									onClick={decrementHandler}
									disabled={value === 1}
								>
									<span className="m-auto text-2xl font-thin">−</span>
								</button>
								<input
									type="number"
									className="flex items-center w-full font-semibold text-center text-gray-700 bg-gray-100 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
									name="custom-input-number"
									disabled
									value={product.countInStock > 0 ? value : 0}
								></input>
								<button
									data-action="increment"
									className={
										value === product.countInStock || product.countInStock === 0
											? 'bg-gray-100 text-gray-500  h-full w-20 rounded-r-2xl cursor-pointer'
											: 'bg-gray-100 text-gray-500 hover:text-gray-200 hover:bg-gray-400 h-full w-20 rounded-r-2xl cursor-pointer'
									}
									onClick={incrementHandler}
									disabled={value === product.countInStock}
								>
									<span className="m-auto text-2xl font-thin">+</span>
								</button>
							</div>
						</div>
						<button
							type="submit"
							className={
								product.countInStock === 0
									? 'w-44  inline-flex justify-center  py-2 text-sm font-medium text-white bg-red-600 border border-transparent shadow-sm disabled:opacity-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									: 'w-44  inline-flex justify-center  py-2 text-sm font-medium text-white bg-red-600 border border-transparent shadow-sm disabled:opacity-10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-700'
							}
							disabled={product.countInStock === 0}
						>
							Add to Cart
						</button>
					</div>
					<hr />
					<div className="grid grid-cols-1 mt-2 text-gray-900 lg:grid-cols-2">
						<h1 className="font-bold">
							Product Id: <span className="font-light">{product._id}</span>
						</h1>
						<h1 className="font-bold">
							Brand:{' '}
							<span className="font-light capitalize">{product.brand}</span>
						</h1>
						<h1 className="font-bold">
							Categories:{' '}
							<span className="font-light capitalize">{product.category}</span>
						</h1>
						<h1 className="font-bold">
							Stocks:{' '}
							<span className="font-light capitalize">
								{product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
							</span>
						</h1>
					</div>
				</div>
				<br />
			</div>
			<div className="m-2 text-gray-900 sm:m-3">
				<h1 className="text-xl font-bold">Description</h1>
				<p className="mx-2 mt-2 font-light text-justify indent-3">
					{product.specs}
				</p>
			</div>
			<div className="m-2 text-gray-900 sm:m-3">
				<h1 className="text-xl font-bold">Reviews (0)</h1>
			</div>
		</div>
	);
}
