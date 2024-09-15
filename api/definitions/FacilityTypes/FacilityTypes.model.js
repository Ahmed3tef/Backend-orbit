import { Schema, model } from 'mongoose';

const FacilityTypesSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'FacilityType must have a name'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const facilityTypesModel = model('FacilityType', FacilityTypesSchema);
