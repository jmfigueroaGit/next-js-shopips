import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { loginUser } from '@/actions/userAction';
import { signIn } from 'next-auth/client';
import Loading from '../layout/Loading';

export default function LoginScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		setLoading(true);
		const result = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});
		setLoading(false);

		if (result.error) {
			toast.error(result.error);
		} else {
			window.location.href = '/';
		}
	};

	return (
		<div className="flex items-center justify-center">
			<div className="w-full max-w-md mx-12">
				<div>
					<h2 className="text-3xl font-extrabold text-center text-gray-900">
						Sign in to your Account
					</h2>
				</div>
				<form
					className="mt-8 space-y-6"
					action="#"
					method="POST"
					onSubmit={submitHandler}
				>
					<input type="hidden" name="remember" value="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div className="flex flex-col items-center justify-between sm:flex-row">
						<div className="flex items-center mt-1">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-indigo-500"
							/>
							<label
								htmlFor="remember-me"
								className="block ml-2 text-sm text-gray-900"
							>
								Remember me
							</label>
						</div>

						<div className="flex items-center mt-1 text-sm text-right">
							<a
								href="#"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-600 bg-yellow-400 border border-transparent rounded-md group hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 hover:text-gray-200"
							disabled={loading ? true : false}
						>
							{loading ? <Loading /> : 'Sign Up'}
						</button>
					</div>
					<div className="flex justify-center text-sm">
						<Link href="/register">
							<a className="font-medium text-blue-600 hover:text-indigo-500">
								New User?
							</a>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
