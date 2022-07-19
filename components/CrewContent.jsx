import Image from 'next/image';
import { useState } from 'react';
// import Swiper and modules styles
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ! todo add padding in grid in tablet
export default function CrewContent(props) {
  return (
    <>
      <div className="px-6 text-white md:mt-10 md:px-10">
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
                <div className="grid justify-items-center gap-8 md:gap-12 lg:grid-cols-tech lg:grid-rows-1 lg:gap-20 lg:gap-x-32">
                  {/* 1st grid item */}

                  <div className="relative aspect-square min-h-[14rem] md:order-3 md:min-h-[33.5rem]">
                    <Image
                      src={item.images.png}
                      alt={`Image of ${item.name}`}
                      quality={100}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  {/* 2nd grid item */}
                  <div className="z-50 flex w-full items-center justify-center gap-4 md:order-2 lg:order-1 lg:w-fit lg:justify-self-start">
                    <div className="swiper-button-prev !static !mt-0 rounded-full bg-white lg:!hidden"></div>
                    <div className="swiper-pagination !static !flex !w-fit !gap-4 lg:!flex-col lg:text-3xl"></div>
                    <div className="swiper-button-next !static !mt-0 rounded-full bg-white lg:!hidden"></div>
                  </div>

                  {/* 3rd item */}
                  <div className="text-center text-white md:order-1 md:h-[162px]">
                    <div>
                      <p className=" mb-2 font-Bellefair uppercase opacity-50 md:text-2xl">
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
