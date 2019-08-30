/* eslint-disable no-shadow */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import bcryptjs from 'bcryptjs';
import { mongoose, Schema } from '../configs';

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  image: String,
  role: String
}, { timestamps: true });

/**
 * Using regular function to use "this"
 * Arrow function doesn't have a this itself => console.log(this) => undefined
 */
userSchema.pre('save', function (next) {
  const user = this;
  // Only hash password if it has beed modified or is new
  if (!user.isModified('password')) return next();
  // for new password
  if (user.password) {
    bcryptjs.genSalt(10, (err, salt) => {
      bcryptjs.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next(err);
      });
    });
  }
  next();
});

const ModelUser = mongoose.model('User', userSchema);
export default ModelUser;
