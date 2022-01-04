import { SearchIcon } from '@heroicons/react/solid';

export default function SearchBar() {
	return (
		<div className="pt-2 relative mx-auto text-gray-600">
			<input
				className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-3xl text-sm focus:outline-none"
				type="search"
				name="search"
				placeholder="Search"
			/>
			<button
				type="submit"
				className="absolute right-0 top-0 bottom-0 mt-2 bg-yellow-400 py-2 px-4  rounded-r-3xl hover:bg-yellow-600"
			>
				<SearchIcon className="h-5 w-5 text-white" />
			</button>
		</div>
	);
}
