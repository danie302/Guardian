import { Document } from 'mongoose';

export interface ILocation extends Document {
  _id: string;
  name: string;
  lat: number;
  lng: number;
  active: boolean;
  visible: boolean;
}
