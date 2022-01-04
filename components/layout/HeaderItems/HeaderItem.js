export default function HeaderItem({ title, Icon }) {
	return (
		<a className="flex flex-col items-center mx-5 text-gray-600 hover:text-yellow-600 group">
			<Icon className="w-5 h-5 group-hover:animate-bounce" />{' '}
			<h5 className="text-sm tracking-widest opacity-0 group-hover:opacity-100">
				{title}
			</h5>
		</a>
	);
}
