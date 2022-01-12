import User from '@/models/user';
import asyncHandler from 'express-async-handler';
import generateToken from '@/utils/generateToken';
import absoluteUrl from 'next-absolute-url';
import cloudinary from 'cloudinary';

// Setting up cloudinary config
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// @desc    Register User
// @route   GET /api/auth/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
		folder: 'shopips/avatars',
		width: '150',
		crop: 'scale',
	});

	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	const user = await User.create({
		name,
		email,
		password,
		avatar: {
			public_id: result.public_id,
			url: result.secure_url,
		},
	});

	if (user) {
		res.status(201).json({
			success: true,
			message: 'Account Registered successfully',
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select('+password');

	if (user && (await user.comparePassword(password))) {
		res.status(200).json({
			success: true,
			user,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

// @desc    Load Current user
// @route   GET /api/auth/user
// @access  Private
const loadUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user.id);

	res.status(200).json({
		success: true,
		user,
	});
});

export { registerUser, loadUserProfile, authUser };
