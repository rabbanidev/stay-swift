import dbConnect from '../dbConnect';
import Hotel from '../models/hotel.model';
import { IHotel } from '../types';
import { replaceMongoIdInArray, replaceMongoIdInObject } from '../utils/mongo';

export const getHotels = async (): Promise<IHotel[] | null> => {
  try {
    await dbConnect();

    const res = await Hotel.find().populate('amenities').lean();

    return replaceMongoIdInArray(res);
  } catch (error) {
    throw error;
  }
};

export const getHotel = async (id: string): Promise<IHotel | null> => {
  try {
    await dbConnect();

    const res = await Hotel.findById(id).populate('amenities').lean();

    return replaceMongoIdInObject(res) as IHotel;
  } catch (error) {
    throw error;
  }
};
