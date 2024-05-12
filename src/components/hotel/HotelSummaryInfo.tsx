import { FC } from 'react';

type Props = {
  fromListPage?: boolean;
};

const HotelSummaryInfo: FC<Props> = ({ fromListPage }) => {
  return (
    <>
      <div className={fromListPage ? 'flex-1' : 'container flex-1'}>
        <h2
          className={fromListPage ? 'text-lg font-bold' : 'text-2xl font-bold'}
        >
          Effotel By Sayaji Jaipur
        </h2>
        <p>📍 Kolkata</p>
        <div className="my-4 flex items-center gap-2">
          <div className="bg-primary grid h-[35px] w-[35px] place-items-center rounded-sm font-bold text-white">
            5.3
          </div>
          <span className="font-medium">Very Good</span>
          <span>232 Reviews</span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center gap-2">
        <h2 className="text-right text-2xl font-bold">$124/night</h2>
        <p className=" text-right">Per Night for 4 Rooms</p>
        {fromListPage ? (
          <button className="btn-primary ">Details</button>
        ) : (
          <button className="btn-primary ">Book</button>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;
