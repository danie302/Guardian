import { Document } from 'mongoose';

export interface IGate extends Document {
  _id: string;
  name: string;
  active: boolean;
  visible: boolean;
  priority: number;
  locationId: string;
}
