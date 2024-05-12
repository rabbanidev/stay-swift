import { Types } from 'mongoose';

export type IAmenity = {
  id: Types.ObjectId | string;
  name: string;
  price?: number;
  instructions?: string;
  hours?: string;
};
