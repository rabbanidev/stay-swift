import { Types } from 'mongoose';
import { IHotel } from './hotelType';
import { IUser } from './userType';

export type IRating = {
  hotelId: Types.ObjectId | string | IHotel;
  userId: Types.ObjectId | string | IUser;
  rating: number;
};
