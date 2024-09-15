import { Schema, model } from 'mongoose';
const archOptionsSchema = new Schema(
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

export const archOptionsModel = model('ArchOption', archOptionsSchema);
