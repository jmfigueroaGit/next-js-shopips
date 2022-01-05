import { ShoppingCartIcon, UserIcon, HeartIcon } from '@heroicons/react/solid';
import SearchBar from './HeaderItems/SearchBar';
import HeaderItem from './HeaderItems/HeaderItem';
import HeaderMobile from './HeaderItems/HeaderMobile';
import Link from 'next/link';

export default function Header() {
	return (
		<header className="top-0 bg-gray-100">
			<div className="px-2 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:pt-0">
				<div className="relative flex items-center justify-center h-16">
					<Link href="/" passHref>
						<div className="flex flex-col items-center justify-center flex-1 cursor-pointer sm:flex-row">
							<div className="flex items-center justify-center flex-shrink-0">
								<h1 className="text-2xl font-bold tracking-widest">
									<span className="text-gray-600">SHO</span>
									<span className="text-yellow-400">PIPS</span>
								</h1>
							</div>
							<SearchBar />
						</div>
					</Link>
					<div className="hidden sm:block visibility:">
						<div className="flex pt-2 pb-3 mt-5">
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
		</header>
	);
}
