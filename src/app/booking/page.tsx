import ProfileInfo from '@/components/user/ProfileInfo';
import PastBooking from '@/components/user/booking/PastBooking';
import UpcomingBooking from '@/components/user/booking/UpcomingBooking';
import { FC } from 'react';

const BookingsPage: FC = () => {
  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingsPage;
