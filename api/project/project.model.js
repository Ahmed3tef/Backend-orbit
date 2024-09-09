const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({

  pid: { type: String, required: true },
  clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  dueDate: { type: Date },
  status: { type: String, enum: ['In Progress', 'Completed', 'Cancelled', 'On Hold'], required: true },
  areas: [AreaSchema],
  totalArea: { type: Number, required: true },
  facilityTypeId: { type: Schema.Types.ObjectId, ref: 'FacilityType', required: true },
  locationId: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
  responsibleEngId: { type: Schema.Types.ObjectId, ref: 'Engineer', required: true },
  designScopeId: { type: Schema.Types.ObjectId, ref: 'Scope', required: true },
  allScopesId: [{ type: Schema.Types.ObjectId, ref: 'Scope' }],
  totalDesignFees: [TotalDesignFeesSchema],
  department: { type: String, required: true },
  permit: {
    fs: { type: Boolean, default: false },  // Fire Safety
    fa: { type: Boolean, default: false }   // Fire Alarm
  },
  scopeOfWork: {
    type: String,
    enum: ['Design', 'Redesign'],
    required: true
  },
  comment: { type: String }
},
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const projectModel = model('Project', projectSchema);
