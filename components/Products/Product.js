import Link from 'next/link';

export default function Product({ product, size }) {
	return (
		<Link href={`/products/${product._id}`} passHref>
			<div className="flex flex-row items-center justify-around py-2 my-5 cursor-pointer sm:flex-col">
				<div className="flex items-center justify-center">
					<img
						src={product.images[0].url}
						alt="photo.png"
						className={` transition duration-100 ease-in transform  sm:hover:scale-105  hover:z-50 ${size}`}
					/>
				</div>
				<br />
				<div className="bottom-0 left-0 right-0 flex flex-col items-center justify-center mt-2 ">
					<h3 className="text-xs font-bold text-gray-500 capitalize">
						{product.brand}
					</h3>
					<h1 className="text-sm font-bold text-blue-700 sm:text-md">
						{product.name}
					</h1>
					<h5 className="text-xs font-bold text-red-700 sm:text-sm">
						$ {product.price}
					</h5>
				</div>
			</div>
		</Link>
	);
}
