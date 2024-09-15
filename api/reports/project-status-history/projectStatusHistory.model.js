import { Schema, model } from 'mongoose';

const projectStatusHistorySchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'project',
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const projectStatusHistoryModel = model('projectStatusHistory', projectStatusHistorySchema);
