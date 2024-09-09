import { Schema, model } from 'mongoose';

const departmentsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'department must have a name'],
    },
    code: {
      type: String,
      required: [true, 'department must have a code'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const departmentsModel = model('Departments', departmentsSchema);
