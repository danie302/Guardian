import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  lastname: string;
  password: string;
  priority: number;
  locationId: string;
}
