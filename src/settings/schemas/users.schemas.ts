import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  locationId: { type: String, ref: 'Location' },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, index: true, unique: true, required: true },
  email: { type: String, index: true, unique: true, required: true },
  password: { type: String, required: true },
  priority: { type: Number, required: true },
  active: { type: Boolean, default: true },
  visible: { type: Boolean, default: true },
});
