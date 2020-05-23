import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean, default: true },
  visible: { type: Boolean, default: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  priority: { type: Number, required: true },
  email: { type: String, index: true, unique: true, required: true },
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  username: { type: String, index: true, unique: true, required: true },
});
