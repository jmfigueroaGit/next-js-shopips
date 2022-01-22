import React, { useEffect } from 'react';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import SearchBar from './HeaderItems/SearchBar';
import HeaderItem from './HeaderItems/HeaderItem';
import HeaderMobile from './HeaderItems/HeaderMobile';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/actions/userAction';
import { signOut } from 'next-auth/client';

export default function Header({ history }) {
	const dispatch = useDispatch();
	const router = useRouter();
	const { loading, isAuthenticated, user } = useSelector(
		(state) => state.loadUser
	);
	useEffect(() => {
		if (!user) dispatch(loadUser());
	}, [dispatch, user]);

	const logoutHandler = () => {
		signOut();
	};

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
					{user ? (
						<div className="hidden sm:block ">
							{user && user.avatar && (
								<div className="flex pt-2 pb-3 mt-5">
									<HeaderItem title="Favorites" Icon={HeartIcon} />
									<HeaderItem title="Cart" Icon={ShoppingCartIcon} />

									<div className="flex flex-col items-center ml-7 group">
										<img
											src={user.avatar.url}
											className="rounded-full h-7 w-7"
											alt="Avatar"
										/>{' '}
										<h5 className="text-sm text-gray-500 opacity-0 group-hover:opacity-100">
											{name[0]}
										</h5>
									</div>
								</div>
							)}
						</div>
					) : (
						!loading &&
						!isAuthenticated && (
							<Link href="/login">
								<a className="font-bold">Login</a>
							</Link>
						)
					)}
				</div>

				<div className="sm:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{user && user.avatar && (
							<div className="flex flex-row justify-between mx-1 my-2 ">
								<img
									src={user.avatar.url}
									className="rounded-full h-7 w-7"
									alt="Avatar"
								/>{' '}
								<h1 className="font-bold text-gray-600 text-md ">
									{user.name}
								</h1>
								<div></div>
							</div>
						)}

						<HeaderMobile title="Favorites" Icon={HeartIcon} />
						<HeaderMobile title="Cart" Icon={ShoppingCartIcon} />
					</div>
				</div>
			</div>
		</header>
	);
}
