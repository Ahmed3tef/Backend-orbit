const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({

  pId: { type: String, required: true }, // for client
  clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  name: { type: String, required: true },
  dueDate: { type: Date },
  status: {
    type: String, enum: [
      1, // new
      2, // sent
      3, // hold
      4, // lpo
      5, // approved
      6, // revised
      7, // cancelled
      8, // rejected
    ], required: true
  },
  areas: [{
    area: { type: String, required: true },
    desc: { type: String, required: true }
  }],
  totalArea: { type: Number, required: true },
  facilityTypeId: { type: Schema.Types.ObjectId, ref: 'FacilityType', required: true },
  locationId: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
  responsibleEngId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  // scopes
  designScopeId: { type: Schema.Types.ObjectId, ref: 'DesignScope' },
  archScopeId: { type: Schema.Types.ObjectId, ref: 'ArchScope' },
  asbuiltScopeId: { type: Schema.Types.ObjectId, ref: 'AsbuiltScope' },
  authorizationScopeId: { type: Schema.Types.ObjectId, ref: 'AuthorizationScope' },
  gsasScopeId: { type: Schema.Types.ObjectId, ref: 'GsasScope' },
  prepareScopeId: { type: Schema.Types.ObjectId, ref: 'PrepareScope' },
  reviewScopeId: { type: Schema.Types.ObjectId, ref: 'ReviewScope' },
  reviewModifyScopeId: { type: Schema.Types.ObjectId, ref: 'ReviewModifyScope' },
  shopDrawingScopeId: { type: Schema.Types.ObjectId, ref: 'ShopDrawingScope' },
  structureScopeId: { type: Schema.Types.ObjectId, ref: 'StructureScope' },
  supervisionScopeId: { type: Schema.Types.ObjectId, ref: 'SupervisionScope' },
  tenderScopeId: { type: Schema.Types.ObjectId, ref: 'TenderScope' },

  totalDesignFees: [{
    percent: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
    },
    paidAt: {
      type: Date,
    },
    status: {
      type: String,
    },
    order: {
      type: Number,
      required: true,
    },
  }],
  department: { type: String, required: true },
  permit: {
    fs: { type: Boolean, default: false },  // Fire Safety
    fa: { type: Boolean, default: false }   // Fire Alarm
  },
  scopeOfWork: {
    type: String,
    required: true
  },
  totalFees: { type: Number, required: true },
  comment: { type: String }
},
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export const projectModel = model('Project', projectSchema);
