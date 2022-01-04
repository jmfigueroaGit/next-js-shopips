export default function BannerText({ title, location }) {
	return (
		<div className="flex flex-col items-center justify-center text-white ">
			<p className="text-3xl font-bold">{title}</p>
			<p className="flex mb-10 text-xl font-semibold leading-none">
				{location ? (
					<>
						{' '}
						Home
						{' > '}
						<span className="text-red-600 ">{location}</span>
					</>
				) : (
					<span className="text-red-600 ">Home</span>
				)}
			</p>
		</div>
	);
}
