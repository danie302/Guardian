import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
  name: { type: String, index: true, unique: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  active: { type: Boolean, default: true },
  visible: { type: Boolean, default: true },
});
