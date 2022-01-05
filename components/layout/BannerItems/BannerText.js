export default function BannerText({ title, category, brand }) {
	return (
		<div className="flex flex-col items-center justify-center text-white ">
			<h1 className="text-xl font-bold sm:text-3xl">{title}</h1>
			<h3 className="flex mt-2 mb-10 text-sm font-semibold leading-none opacity-75 sm:text-xl">
				{category && brand ? (
					<>
						Home{' > '}
						<span className="hover:underline">{category}</span>
						{' > '}
						<span className="text-red-600 hover:underline">{brand}</span>
					</>
				) : (
					<span className="text-red-600 ">Home</span>
				)}
			</h3>
		</div>
	);
}
