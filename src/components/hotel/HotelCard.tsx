/* eslint-disable @next/next/no-img-element */

import { FC } from 'react';
import HotelSummaryInfo from './HotelSummaryInfo';

const HotelCard: FC = () => {
  return (
    <div className="border-gray/20 flex gap-6 rounded-md border p-4">
      <img
        src="./assets/images/image-1.png"
        className="max-h-[162px] max-w-[240px]"
        alt=""
      />
      <HotelSummaryInfo fromListPage={true} />
    </div>
  );
};

export default HotelCard;
