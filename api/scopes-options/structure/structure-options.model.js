import { Schema, model } from 'mongoose';
const structureOptionsSchema = new Schema(
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

export const structureOptionsModel = model('StructureOption', structureOptionsSchema);
