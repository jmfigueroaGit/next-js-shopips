export default function BannerItem({ title, content, Icon }) {
	return (
		<div className="flex items-center w-2/4 py-4 m-1 text-gray-400 sm:w-2/5 sm:justify-center">
			<Icon className="w-10 h-10 " />
			<span className="ml-2 ">
				<h1 className="font-bold">{title}</h1>
				<p className="font-light">{content}</p>
			</span>
		</div>
	);
}
