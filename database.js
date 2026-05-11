const mongoose = require("mongoose");

const URL =
	process.env.MONGO_URI ||
	"mongodb+srv://navaneetsharma22:l49jTIkPSSoAN3H5@cluster0.9pjvmla.mongodb.net/test";

async function connectDB() {
	try {
		await mongoose.connect(URL);
		console.log("MongoDB connected");
	} catch (error) {
		console.error("MongoDB connection failed:", error.message);
		process.exit(1);
	}
}

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
			match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
		},
		age: {
			type: Number,
			min: 0,
			max: 120,
			default: 18,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = {
	connectDB,
	User,
};
