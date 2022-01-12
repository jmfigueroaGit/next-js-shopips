export default function HeaderItem({ title, Icon }) {
	return (
		<a className="flex flex-col items-center ml-5 mr-3 text-gray-600 cursor-pointer hover:text-yellow-600 group">
			<Icon className="w-7 h-7" />{' '}
			<h5 className="text-sm tracking-widest opacity-0 group-hover:opacity-100">
				{title}
			</h5>
		</a>
	);
}
