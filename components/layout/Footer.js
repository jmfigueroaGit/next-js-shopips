import { ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/solid';
import SearchBar from './HeaderItems/SearchBar';
import HeaderItem from './HeaderItems/HeaderItem';
import HeaderMobile from './HeaderItems/HeaderMobile';

export default function Footer() {
	return (
		<footer className="bottom-0 left-0 right-0 py-3 m-3 mb-0 bg-gray-100 ">
			<div className="flex flex-col items-center justify-center ">
				<h1 className="text-2xl font-bold tracking-widest">
					<span className="text-gray-600">SHO</span>
					<span className="text-yellow-400">PIPS</span>
				</h1>
				<p className="text-gray-400">
					&#169; 2022 Shopips, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
