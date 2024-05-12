/* eslint-disable @next/next/no-img-element */

import { FC } from 'react';

const Gallery: FC = () => {
  return (
    <section className="container">
      <div className="imageshowCase grid grid-cols-2">
        <img src="./assets/images/1.png" className="h-[400px]" alt="" />

        <div className="grid h-[400px] grid-cols-2 grid-rows-2">
          <img src="./assets/images/2.png" alt="" />
          <img src="./assets/images/3.png" alt="" />
          <img src="./assets/images/4.png" alt="" />
          <img src="./assets/images/5.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
