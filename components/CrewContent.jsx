import Image from 'next/image';
import { useEffect, useState } from 'react';

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
  // and changes the state, which helps in displaying info related to the image that is currently visible in
  function changeDescription(current) {
    setActiveCrewMember(current);
  }

  return (
    <>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{
            type: 'bullets',
            clickable: true,
            bulletClass: 'h-4 w-4 rounded-full bg-slate-800',
            // bulletActiveClass: '',
          }}
          // calling function that changes state
          onSlideChange={(swiper) => changeDescription(swiper.activeIndex)}
        >
          {props.crew.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative mx-auto aspect-square h-56 border-b border-gray-800">
                <Image
                  src={item.images.png}
                  alt={`Image of ${item.name}`}
                  layout="fill"
                />
              </div>
              <div className="mx-auto mb-9 h-0.5 w-3/4 bg-slate-800"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <p>{props.crew[activeCrewMember].bio}</p>
      </div>
    </>
  );
}

{
  /* <div className=""></div>; */
}
