import Image from 'next/image';
// for carasoule
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect, useState } from 'react';
export default function TechContent(props) {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWindow]);
  return (
    <>
      <div className="md:mt-10 lg:pl-40">
        <div className="mb-8 flex justify-center gap-4 font-BarlowCondensed text-3xl tracking-[0.1625rem] text-white md:mb-16 lg:justify-start">
          <span className="opacity-25">03</span>
          <p className="uppercase">Space launch 101</p>
        </div>
        <div className="mb-20 md:mb-24">
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
              renderBullet: function (index, className) {
                return `<span class=${className}> ${index + 1} </span>`;
              },
            }}
            modules={[EffectFade, Navigation, Pagination]}
          >
            {props.technology.map((item, index) => (
              <SwiperSlide key={index}>
                {/* grid */}
                <div className="grid place-items-center gap-8 md:gap-12 lg:grid-cols-tech lg:grid-rows-1 lg:gap-20 lg:gap-x-32">
                  {/* 1st grid item */}
                  <div className="w-full lg:order-3">
                    <div className="relative aspect-[375/170] w-full lg:aspect-square">
                      <Image
                        src={
                          item.images[
                            windowDimensions.width >= 1024
                              ? 'portrait'
                              : 'landscape'
                          ]
                        }
                        alt={`Image of ${item.name}`}
                        quality={100}
                        layout="fill"
                      />
                    </div>
                  </div>

                  {/* 2nd grid item */}
                  <div className="flex w-full justify-center gap-4 lg:order-1 lg:w-fit lg:justify-self-start">
                    <div className="swiper-button-prev !static !mt-0 rounded-full bg-white lg:!hidden"></div>
                    <div className="swiper-pagination !static !flex !w-fit !gap-4 lg:!flex-col lg:text-3xl"></div>
                    <div className="swiper-button-next !static !mt-0 rounded-full bg-white lg:!hidden"></div>
                  </div>

                  {/* 3rd item */}
                  <div className="max-w-[28.75rem] text-center text-white lg:order-2 lg:max-w-[27.5rem] lg:justify-self-start lg:text-left mmd:px-6">
                    <div>
                      <p className=" mb-2 font-BarlowCondensed uppercase tracking-[0.16875rem] text-secondary">
                        The terminology...
                      </p>
                      <p className="mb-4 font-Bellefair text-2xl uppercase lg:text-6xl">
                        {item.name}
                      </p>
                      <p className="font-Barlow text-secondary lg:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style global jsx>{`
        :root {
          --swiper-theme-color: #fff !important;
          --swiper-pagination-bullet-size: 2.5rem !important;
          --swiper-navigation-size: 1.75rem !important;
          /* --swiper-pagination-bullet-horizontal-gap: 0.5rem; */
          --swiper-navigation-color: #000;
        }

        .swiper-pagination-bullet {
          line-height: var(--swiper-pagination-bullet-size);
          font-family: 'Bellefair';
          color: #fff;
          border-width: 1px;
          border-color: rgb(255 255 255);
        }
        .swiper-pagination-bullet-active {
          color: rgb(0 0 0);
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: var(--swiper-pagination-bullet-size) !important;
          height: var(--swiper-pagination-bullet-size) !important;
        }

        @media (min-width: 64em) {
          :root {
            --swiper-pagination-bullet-size: 5rem !important;
          }
        }
      `}</style>
    </>
  );
}
