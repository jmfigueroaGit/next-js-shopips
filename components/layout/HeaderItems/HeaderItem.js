export default function HeaderItem({ title, Icon }) {
	return (
		<a className="text-gray-600 hover:text-yellow-600 group flex flex-col items-center mx-5">
			<Icon className="h-5 w-5 group-hover:animate-bounce" />{' '}
			<p className="opacity-0 group-hover:opacity-100 tracking-widest text-sm">
				{title}
			</p>
		</a>
	);
}
