import { Schema, model } from 'mongoose';

const civilOptionsSchema = new Schema(
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

export const civilOptionsModel = model('CivilOptions', civilOptionsSchema);
