import Image from 'next/image';

export default function Product({ url, brand, name, price, width, height }) {
	return (
		<div className="flex flex-row justify-center py-2 my-5 sm:flex-col">
			<Image
				src={url}
				height={height}
				width={width}
				alt="photo.png"
				className="transition duration-100 ease-in transform cursor-pointer sm:hover:scale-105 hover:z-50"
			/>
			<br />
			<div className="bottom-0 left-0 right-0 flex flex-col items-center justify-center mt-2 ">
				<h3 className="text-xs font-bold text-gray-500">{brand}</h3>
				<h1 className="text-xl font-bold text-blue-700">{name}</h1>
				<p className="text-sm font-bold text-red-700">{price}</p>
			</div>
		</div>
	);
}
