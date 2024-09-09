import { Schema, model } from 'mongoose';
import { arrayLimit, percentSumValidator } from '../../../utils/payments-helpers';
import { ScopePaymentSchema } from '../../../models/shared-models';

const structureScopeSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    data: [{
      id: {
        type: Schema.Types.ObjectId,
        ref: 'StructureOptions',
        required: true,
      }, // id of the structure option
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


export const structureScopeModel = model('structureScope', structureScopeSchema);
