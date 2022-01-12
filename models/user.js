import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'This field is required'],
	},
	email: {
		type: String,
		required: [true, 'This field is required'],
		validate: [validator.isEmail, 'Please enter valid email address'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'This field is required'],
		select: false,
	},
	avatar: {
		public_id: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	role: {
		type: String,
		default: 'user',
		enum: ['user', 'admin'],
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
});

// Compare user password if match
userSchema.methods.comparePassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

mongoose.models = {};
export default mongoose.model.User || mongoose.model('User', userSchema);
