import { ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/solid';
import SearchBar from './HeaderItems/SearchBar';
import HeaderItem from './HeaderItems/HeaderItem';
import HeaderMobile from './HeaderItems/HeaderMobile';

export default function Header() {
	return (
		// <!-- This example requires Tailwind CSS v2.0+ -->
		<nav className="bg-gray-100">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-1 flex items-center justify-center">
						<div className="flex-shrink-0 flex items-center">
							<h1 className="font-bold text-2xl">
								<span className="text-gray-600">SHO</span>
								<span className="text-yellow-400">PIPS</span>
							</h1>
						</div>
						<SearchBar />
					</div>
					<div className="sm:block visibility: hidden">
						<div className="pt-2 pb-3 flex mt-5">
							<HeaderItem title="Profile" Icon={UserIcon} />
							<HeaderItem title="Favorites" Icon={HeartIcon} />{' '}
							<HeaderItem title="Cart" Icon={ShoppingCartIcon} />
						</div>
					</div>
				</div>

				<div className="sm:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<HeaderMobile title="Profile" Icon={UserIcon} />
						<HeaderMobile title="Favorites" Icon={HeartIcon} />
						<HeaderMobile title="Cart" Icon={ShoppingCartIcon} />
					</div>
				</div>
			</div>
		</nav>
	);
}
