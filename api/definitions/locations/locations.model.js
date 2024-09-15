import { Schema, model } from 'mongoose';

const locationsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'location must have a name'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const locationsModel = model('Location', locationsSchema);
