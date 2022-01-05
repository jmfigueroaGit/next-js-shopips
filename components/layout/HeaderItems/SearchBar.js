import { SearchIcon } from '@heroicons/react/solid';

export default function SearchBar() {
	return (
		<div className="relative pt-2 mx-auto text-gray-600">
			<input
				className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-3xl focus:outline-none"
				type="search"
				name="search"
				placeholder="Search"
			/>
			<button
				type="submit"
				className="absolute top-0 bottom-0 right-0 px-4 py-2 mt-2 bg-yellow-400 rounded-r-3xl hover:bg-yellow-600"
			>
				<SearchIcon className="w-5 h-5 text-white" />
			</button>
		</div>
	);
}
