import { Types } from 'mongoose';
import { IAmenity } from './amenitieType';

export type ILocation = {
  latitude: number;
  longitude: number;
};

export type IHotel = {
  id: Types.ObjectId | string;
  name: string;
  address1: string;
  airportCode: string;
  city?: string;
  countryCode?: string;
  highRate?: number;
  lowRate?: number;
  propertyCategory?: number;
  thumbNailUrl?: string;
  gallery?: string[];
  overview?: string;

  location?: ILocation;
  locationDescription?: string;
  postalCode?: number;

  shortDescription?: string;
  stateProvinceCode?: string;

  amenities?: (Types.ObjectId | string | IAmenity)[];
};
