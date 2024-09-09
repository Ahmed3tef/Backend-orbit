const mongoose = require('mongoose');
const { Schema } = mongoose;

export const ScopePaymentSchema = new Schema({
  percent: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
  },
});