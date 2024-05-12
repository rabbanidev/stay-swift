import { Types } from 'mongoose';
import { IHotel } from './hotelType';
import { IUser } from './userType';

export type IBooking = {
  hotelId: Types.ObjectId | string | IHotel;
  userId: Types.ObjectId | string | IUser;
  checkin: string;
  checkout: string;
};
