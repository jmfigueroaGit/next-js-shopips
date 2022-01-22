import Cart from '@/models/cart';
import asyncHandler from 'express-async-handler';

//  @desc Create Add to Cart
//  @route POST /api/cart
//  @access PRIVATE
export const addToCart = asyncHandler(async (req, res) => {
	const { orderItems } = req.body;

	if (!req.user._id) {
		res.status(404);
		throw new Error('Login first to access this route');
	}
	const cart = await Cart.create({
		user: req.user._id,
		orderItems,
	});

	if (cart) {
		res.status(201).json(cart);
	} else {
		res.status(500).json({ message: 'Invalid data input' });
	}
});
