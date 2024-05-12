import Gallery from '@/components/hotel/details/Gallery';
import Overview from '@/components/hotel/details/Overview';
import Summary from '@/components/hotel/details/Summary';
import { FC } from 'react';

const HotelDetailsPage: FC = () => {
  return (
    <>
      <Summary />
      <Gallery />
      <Overview />
    </>
  );
};

export default HotelDetailsPage;
