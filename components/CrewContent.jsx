import Image from 'next/image';
import { useState } from 'react';
// import Swiper and modules styles
import SwiperCore, { Keyboard, Mousewheel } from 'swiper/core';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Keyboard, Mousewheel]);

// ! todo add padding in grid in tablet
export default function CrewContent(props) {
  return (
    <>
      <div className="px-6 text-white md:mt-10 md:px-28 xl:px-40 ">
        {/* Top line */}
        <div className="mb-8 flex justify-center gap-4 font-BarlowCondensed md:mb-16 md:justify-start">
          <span className="opacity-25">03</span>
          <p className="uppercase tracking-[2.6px]">meet your crew</p>
        </div>

        {/* Carasoule */}
        <div className="">
          <Swiper
            effect={'fade'}
            spaceBetween={30}
            fadeEffect={{
              crossFade: true,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
          >
            {props.crew.map((item, index) => (
              <SwiperSlide key={index}>
                {/* grid */}
                <div className="grid justify-items-center gap-8 md:gap-12 lg:grid-cols-2 lg:grid-rows-2 lg:gap-20 lg:gap-x-32">
                  {/* 1st grid item */}

                  <div className="relative aspect-square min-h-[14rem] md:order-3 md:min-h-[33.5rem] lg:col-start-2 lg:row-span-2">
                    <Image
                      src={item.images.png}
                      alt={`Image of ${item.name}`}
                      quality={100}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  {/* 2nd grid item */}
                  <div className="z-50 col-span-1 flex w-full items-center justify-center gap-4 md:order-2 lg:col-span-1 lg:row-start-2 lg:h-4 lg:justify-start">
                    <div className="swiper-button-prev !static !mt-0 rounded-full bg-white lg:!hidden"></div>
                    <div className="swiper-pagination !static !flex !w-fit !gap-4"></div>
                    <div className="swiper-button-next !static !mt-0 rounded-full bg-white lg:!hidden"></div>
                  </div>

                  {/* 3rd item */}
                  <div className="max-w-[33.5rem] text-center text-white md:order-1 md:h-60 lg:h-72 lg:max-w-[38.375rem] lg:justify-self-start lg:text-left">
                    <div>
                      <p className=" mb-2 font-Bellefair uppercase opacity-50 md:text-2xl lg:text-3xl">
                        {item.role}
                      </p>
                      <p className="mb-4 font-Bellefair text-2xl uppercase md:text-5xl lg:text-6xl">
                        {item.name}
                      </p>
                      <p className="font-Barlow text-secondary lg:text-lg">
                        {item.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
