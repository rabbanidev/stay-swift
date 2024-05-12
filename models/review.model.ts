import mongoose, { Schema, Types } from 'mongoose';
import { IReview } from '../types';

const reviewSchema = new Schema<IReview>(
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
    review: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Review =
  mongoose.models.Review ?? mongoose.model<IReview>('Review', reviewSchema);

export default Review;
