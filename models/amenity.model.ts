import mongoose, { Schema } from 'mongoose';
import { IAmenity } from '../types';

const amenitySchema = new Schema<IAmenity>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    instructions: {
      type: String,
      required: false,
    },
    hours: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Amenity =
  mongoose.models.Amenity ?? mongoose.model<IAmenity>('Amenity', amenitySchema);

export default Amenity;
