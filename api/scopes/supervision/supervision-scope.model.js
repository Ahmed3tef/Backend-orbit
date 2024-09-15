import { Schema, model } from 'mongoose';
import { arrayLimit, percentSumValidator } from '../../../utils/payments-helpers';
import { ScopePaymentSchema } from '../../../models/shared-models';

const supervisionScopeSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    supervisionOptionId: {
      type: Schema.Types.ObjectId,
      ref: 'SupervisionOptions',
      required: true,
    },
    engineersData: [{
      contractCount: {
        type: Number, 
        required: true,
      },
      engType: {
        type: Number, // elec, mech, etc
        required: true,
      },
      contractType: {
        type: Number, // in days
        required: true,
      },
      fees: {
        type: Number,
        required: true,
      },
    }],
    payments: {
      type: [ScopePaymentSchema],
      validate: [
        { validator: arrayLimit, msg: '{PATH} exceeds the limit of 4' }, // Validator for max length of 4
        { validator: percentSumValidator, msg: '{PATH} sum must be 100' } // Validator for percent sum
      ]
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


export const supervisionScopeModel = model('SupervisionScope', supervisionScopeSchema);
