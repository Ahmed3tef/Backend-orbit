import { Schema, model } from 'mongoose';

const prepareOptionsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'option must have a name'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const prepareOptionsModel = model('PrepareOption', prepareOptionsSchema);
