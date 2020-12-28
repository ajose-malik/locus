const mongoose = require('mongoose');
const { Schema } = mongoose;
const Pixel = require('./pixel.js');

const userSchema = Schema({
	name: {
		type: String,
		required: true
	},
	// profilePhoto: [imageSchema],
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	pixels: [{ type: Schema.Types.ObjectId, ref: 'Pixel' }]
});

module.exports = mongoose.model('User', userSchema);
