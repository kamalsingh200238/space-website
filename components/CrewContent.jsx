import Image from 'next/image';
import { useState } from 'react';

// import Swiper and modules styles
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CrewContent(props) {
  // state to display info related to current image in slideshow
  const [activeCrewMember, setActiveCrewMember] = useState(0);

  // function that takes current(which image is displaying in slideshow)
  //  and changes the state, which helps in displaying info related to the image that is currently visible in
  function changeDescription(current) {
    setActiveCrewMember(current);
  }
  return (
    <>
      <div className="mb-20 md:mt-10 md:mb-24 md:px-10">
        <div className="mb-8 flex justify-center gap-3 font-BarlowCondensed text-xl uppercase tracking-[0.16875] text-white md:mb-16 md:justify-start">
          <span className="opacity-25">02</span>
          <p className="">Meet your crew</p>
        </div>
        {/* grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center">
          {/* 1st element of the grid */}
          <div className="mb-11 w-full md:px-1 lg:col-start-2">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ type: 'bullets', clickable: true }}
              // calling function that changes state
              onSlideChange={(swiper) => changeDescription(swiper.activeIndex)}
            >
              {props.crew.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative mx-auto h-56 w-48 md:h-[33.25rem] md:w-[27.25rem]">
                    <Image
                      src={item.images.png}
                      alt={`Image of ${item.name}`}
                      layout="fill"
                    />
                  </div>
                  <div className="mx-auto mb-11 h-[1px] w-1/2 bg-slate-800 md:mb-14"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 2nd Eelement of the grid */}
          <div className="-z-30 px-6 text-center font-Bellefair text-white md:px-12 lg:row-start-1 lg:text-left">
            <p className="mb-2 uppercase opacity-50 md:text-2xl">
              {props.crew[activeCrewMember].role}
            </p>
            <p className="mb-4 text-2xl uppercase md:text-5xl">
              {props.crew[activeCrewMember].name}
            </p>
            <p className="font-Barlow text-secondary">
              {props.crew[activeCrewMember].bio}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
