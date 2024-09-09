import { Schema, model } from 'mongoose';
import { arrayLimit, percentSumValidator } from '../../../utils/payments-helpers';
import { ScopePaymentSchema } from '../../../models/shared-models';

const reviewModifyScopeSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    data: [{
      id: {
        type: Schema.Types.ObjectId,
        required: true,
      }, // id of the asbuilt option
      type: {
        type: String, // elec, mech, asbuilt, etc
        required: true,
      },

      fees: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number, // in days
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


export const reviewModifyScopeModel = model('ReviewModifyScope', reviewModifyScopeSchema);
