import HotelList from '@/components/hotel/HotelList';
import Filter from '@/components/search/Filter';
import Search from '@/components/search/Search';
import { FC } from 'react';

const HotelListPage: FC = () => {
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat pb-[60px] pt-[100px]">
        <div className="container items-center py-12 ">
          <Search fromList={true} />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <HotelList />
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
