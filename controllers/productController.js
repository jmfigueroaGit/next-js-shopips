import Product from '../models/product';
import asyncHandler from 'express-async-handler';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find();
	const count = await Product.countDocuments();

	res.json({
		total: count,
		products,
	});
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getSingleProduct = asyncHandler(async (req, res, next) => {
	const product = await Product.findById(req.query.id);

	if (!product) {
		throw new Error('ID not found');
	}
	res.status(201).json({
		success: true,
		product,
	});
});

export { getProducts, getSingleProduct };
