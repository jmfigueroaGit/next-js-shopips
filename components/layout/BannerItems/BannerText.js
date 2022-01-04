export default function BannerText({ title, category, brand }) {
	return (
		<div className="flex flex-col items-center justify-center text-white ">
			<h1 className="text-3xl font-bold">{title}</h1>
			<h3 className="flex mt-2 mb-10 text-xl font-semibold leading-none tracking-widest opacity-75">
				{category && brand ? (
					<>
						{' '}
						Home
						{' > '}
						<div className="hover:underline">{category}</div>
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
