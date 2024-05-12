import mongoose, { Schema, Types } from 'mongoose';
import { IBooking } from '../types';

const bookingSchema = new Schema<IBooking>(
  {
    hotelId: {
      type: Types.ObjectId,
      required: true,
      ref: 'Review',
    },
    userId: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    checkin: {
      required: true,
      type: String,
    },
    checkout: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Booking =
  mongoose.models.Booking ?? mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;
