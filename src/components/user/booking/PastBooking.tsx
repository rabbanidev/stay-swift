import { FC } from 'react';

const PastBooking: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>

      <div className="rounded-md bg-[#ebf6e9] p-4">
        <div className="flex items-center justify-between ">
          <div>
            <h3 className="text-xl font-semibold">Effotel By Sayaji Jaipur</h3>
            <div className="my-4 text-sm text-gray-600">
              <p>Check In: 12/12/2021</p>
              <p>Check Out: 14/12/2021</p>
            </div>
          </div>

          <div>
            <h3 className="text-right text-xl font-semibold">$124</h3>
            <p className="text-sm text-gray-600">$62 per night x 2 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastBooking;
