const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'This field is required'],
		},
		images: [
			{
				public_id: {
					type: String,
					required: [true, 'This field is required'],
				},
				url: {
					type: String,
					required: [true, 'This field is required'],
				},
			},
		],
		brand: {
			type: String,
			required: [true, 'This field is required'],
		},
		category: {
			type: String,
			required: [true, 'This field is required'],
		},
		description: {
			type: String,
			required: [true, 'This field is required'],
		},
		specs: {
			type: String,
			required: [true, 'This field is required'],
		},
		rating: {
			type: Number,
			required: [true, 'This field is required'],
			default: 0,
		},
		numOfReviews: {
			type: Number,
			required: [true, 'This field is required'],
			default: 0,
		},
		price: {
			type: Number,
			required: [true, 'This field is required'],
			default: 0,
		},
		countInStock: {
			type: Number,
			required: [true, 'This field is required'],
			default: 0,
		},
		isFeatured: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

mongoose.models = {};

module.exports =
	mongoose.model.Product || mongoose.model('Product', productSchema);
