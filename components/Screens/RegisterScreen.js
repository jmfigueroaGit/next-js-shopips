import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import Loading from '../layout/Loading';

import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearErrors } from '@/actions/userAction';

export default function LoginScreen() {
	const dispatch = useDispatch();
	const router = useRouter();

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = user;

	const [avatar, setAvatar] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [avatarPreview, setAvatarPreview] = useState(
		'/images/default_avatar.jpg'
	);

	const { success, error, loading } = useSelector((state) => state.register);

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearErrors());
		}
	}, [success, error, dispatch, router]);

	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error('Password do not match');
			dispatch(clearErrors());
		} else {
			const userData = {
				name,
				email,
				password,
				avatar,
			};
			dispatch(registerUser(userData));
			router.push('/login');
		}
	};

	const onChange = (e) => {
		if (e.target.name === 'avatar') {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatar(reader.result);
					setAvatarPreview(reader.result);
				}
			};

			reader.readAsDataURL(e.target.files[0]);
		} else {
			setUser({ ...user, [e.target.name]: e.target.value });
		}
	};

	return (
		<div className="flex items-center justify-center">
			<div className="w-full max-w-md mx-12">
				<div>
					<h2 className="text-3xl font-extrabold text-center text-gray-900">
						Create your new account
					</h2>
				</div>
				<form
					className="mt-8 space-y-6"
					action="#"
					method="POST"
					onSubmit={submitHandler}
				>
					<img
						src={avatarPreview}
						className="mx-auto rounded-full h-28 w-28"
						alt={avatarPreview}
					/>
					<div className="flex flex-col justify-between space-y-1 rounded-md shadow-sm">
						<div>
							<input
								type="text"
								id="name_field"
								name="name"
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Name"
								value={name}
								onChange={onChange}
							/>
						</div>
						<div>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								value={email}
								onChange={onChange}
							/>
						</div>
						<div>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={onChange}
							/>
						</div>
						<div>
							<input
								id="confirm_password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
						<div className="w-full mb-3">
							<input
								className="placeholder-gray-500 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding  border border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-none appearance-none rounded-b-md"
								type="file"
								name="avatar"
								id="formFile"
								accept="images/*"
								onChange={onChange}
							/>
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
						<Link href="/login">
							<a className="font-medium text-blue-600 hover:text-indigo-500">
								Already have an account?
							</a>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
