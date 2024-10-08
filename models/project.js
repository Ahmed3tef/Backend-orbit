import { Schema, model } from 'mongoose';
import { renameImage } from '../utils/renameRequestImages.js';

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product must have a name'],
      unique: [true, 'Product name must be unique'],
      minlength: [3, 'Too short name'],
      // maxlength: [50, 'Too long name'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      minlength: [20, 'Product description must be at least 20 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      trim: true,
      max: [100000, 'Too long product price'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required'],
    },
    sold: {
      type: Number,
      default: 0,
    },
    discountPrice: Number,
    mainImage: {
      type: String,
      required: [true, 'Product must have at least one image.'],
    },
    images: [String],
    colors: [String],
    category: {
      type: Schema.ObjectId,
      required: [true, 'category Id is required'],
      ref: 'Category',
    },
    subcategory: {
      type: Schema.ObjectId,
      required: [true, 'subcategory Id is required'],
      ref: 'SubCategory',
    },
    brand: {
      type: Schema.ObjectId,
      ref: 'Brand',
    },
    avgRating: {
      type: Number,
      default: 0,
      max: [5, 'rating must be 5 or below'],
      min: [0, 'rating must be less than or equal to 0'],
    },
    ratings: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// // one to many relation
// // دا هيكون اسم الفيلد اللي ف البرودكت اللي هيشيل الناتج اللي تحت دا
// projectSchema.virtual('reviews', {
//   ref: 'Review', // بقوله بص ف الريفيو سكيما
//   foreignField: 'product', // بقوله لو لقيت الفيلد دا فيها
//   localField: '_id', // بقوله لو لقيت الفيلد ولقيت الاي دي بتاعه بيساوي الا دي بتاع البرودكت اللي احنا فيه ف ضيف الريفيو دي للبرودكت دا ف الفيلد اللي اسمه ريفيوز اللي كان اول سترنج فوق
// });

// // ملحوظة مهمة .. لازم تعمل للرفيوز بوبيوليت عشان يبانوا ف الركوست
// // احنا هنعمل البوبيوليت ف الجت ون برودكت عشان ركوست الجت اول ميكونش كبير اوي

// // دي بتتنفذ اول ما الركوست يتبعت للداتا بيز انه عايز داتا ف هو بيعمل بوبيوليت قبل ما يبعت الداتا

// projectSchema.pre(/^find/, function (next) {
//   this.populate(['category', 'subcategory', 'brand']);
//   next();
// });

// renameImage(projectSchema, 'product');

export const ProjectModel = model('Project', projectSchema);
