import { FC } from 'react';

const ProfileInfo: FC = () => {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="relative grid h-[100px] max-h-[180px] w-[100px] max-w-[180px] place-items-center rounded-full bg-orange-600 text-4xl text-white lg:mb-8">
        S
      </div>

      <div>
        <h3 className="text-2xl font-semibold lg:text-[28px]">Sumit Saha</h3>
        <p className="leading-[231%] lg:text-lg">sumitsaha@gmail.com</p>
      </div>

      <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
    </div>
  );
};

export default ProfileInfo;
