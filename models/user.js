import { Schema, model } from 'mongoose';
import { renameImage } from '../utils/renameRequestImages.js';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'user must have a name'],
      min: [3, 'Too short name'],
    },
    image: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: [true, 'user must have a valid email address'],
      unique: [true, 'email is used before'],
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'user must have a valid phone number'],
      unique: [true, 'phone number is used before'],
    },
    password: {
      type: String,
      required: [true, 'password is required.'],
      min: [6, 'Too short password'],
    },
    passwordChangedAt: Date,
    passwordResetCode: String,
    passwordResetCodeExpiresAt: Date,
    passwordResetCodeVerified: Boolean,
    role: {
      type: String,
      enum: ['user', 'admin', 'employee'],
      default: 'user',
    },
    active: {
      type: Boolean,
      default: true,
    },
    wishlist: [
      {
        type: Schema.ObjectId,
        ref: 'Product',
      },
    ],
    // بدل ما نعمل سكيما ليه دي طريقة عشان نعمل الاوبجكت والسكيما بتاعته جوا سكيما تانية
    addresses: [
      {
        id: { type: Schema.Types.ObjectId },
        alias: {
          type: String,
          unique: [true, 'Alias must be unique'],
        },
        city: {
          type: String,
          required: [true, 'city is required.'],
        },
        government: {
          type: String,
          required: [true, 'government is required.'],
        },
        phone: {
          type: String,
          required: [true, 'phone is required.'],
        },
        details: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
// this hashes the password before saving it to database.
// we must use function declaration to use this keyword.
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});
// قبل كل ركوستات الفايند
// userSchema.pre(/^find/, function (next) {
//   // this.populate(['category', 'subcategory', 'brand']);
//   this.select('-__v -password');
//   next();
// });
renameImage(userSchema);
export const UserModel = model('User', userSchema);
