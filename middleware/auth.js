import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '@/models/user';
import { getSession } from 'next-auth/client';
// Handling user roles
const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(decoded.id).select('-password');

			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authorized, token failed');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});

const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
	const session = await getSession({ req });

	if (!session) {
		res.status(401);
		throw new Error('Login first to access this resource');
	}

	req.user = session.user;
	next();
});

const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error('Not authorized as an admin');
	}
};

export { protect, admin, isAuthenticatedUser };
