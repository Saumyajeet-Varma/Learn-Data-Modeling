import mongoose from 'mongoose';

// // Basic Level (this is correct, not incorrect)
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
//   isActive: Boolean,
// });

// Production Level (this is better)
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is Required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
