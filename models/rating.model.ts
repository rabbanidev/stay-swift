import mongoose, { Schema, Types } from 'mongoose';
import { IRating } from '../types';

const ratingSchema = new Schema<IRating>(
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
    rating: {
      type: Number,
      minlength: 1,
      maxlength: 5,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Rating =
  mongoose.models.Rating ?? mongoose.model<IRating>('Rating', ratingSchema);

export default Rating;
