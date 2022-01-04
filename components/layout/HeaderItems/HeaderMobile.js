export default function HeaderMobile({ title, Icon }) {
	return (
		<a className="m-1 text-gray-600 hover:text-yellow-600 flex justify-between group">
			<Icon className="h-7 w-7 group-hover:animate-bounce" />
			<h1 className="font-bold text-lg">{title}</h1>
			<span></span>
		</a>
	);
}
