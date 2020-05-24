import * as mongoose from 'mongoose';

export const GateSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  visible: { type: Boolean, default: true },
  priority: { type: Number, required: true },
  name: { type: String, index: true, unique: true },
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
});
