export default function HeaderItem({ title, Icon }) {
	return (
		<a className="flex flex-col items-center text-gray-600 cursor-pointer mr-7 hover:text-yellow-600 group">
			<Icon className="w-7 h-7" />{' '}
			<h5 className="text-sm tracking-widest opacity-0 group-hover:opacity-100">
				{title}
			</h5>
		</a>
	);
}
