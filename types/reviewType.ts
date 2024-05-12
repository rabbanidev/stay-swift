import { Types } from 'mongoose';
import { IHotel } from './hotelType';
import { IUser } from './userType';

export type IReview = {
  hotelId: Types.ObjectId | string | IHotel;
  userId: Types.ObjectId | string | IUser;
  review: string;
};
