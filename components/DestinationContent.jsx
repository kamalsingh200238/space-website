import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DestinationContent(props) {
  const [current, setCurrent] = useState(0);
  // setting initial state as Moon (activeDestination is an object because that will help in rendering data to dom)
  const [activeDestination, setActiveDestination] = useState(
    props.destinations[current]
  );
  const handleKeypress = (e) => {
    //check if the event is left arrow or right arrow
    if (e.key === 'ArrowRight') {
      setCurrent((prev) => {
        // checking value of current does not exceed 4
        return prev < props.destinations.length - 1 ? prev + 1 : prev;
      });
    } else if (e.key === 'ArrowLeft') {
      setCurrent((prev) => {
        // checking value of current does not go below 0
        return prev > 0 ? prev - 1 : prev;
      });
    }
  };

  useEffect(() => {
    setActiveDestination(props.destinations[current]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // to listen to keypress
  useEffect(() => {
    window.addEventListener('keydown', handleKeypress);
    return () => {
      window.removeEventListener('keydown', handleKeypress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-7 px-8 text-center font-BarlowCondensed md:mt-10 md:px-24 lg:mt-[4.5rem] lg:px-40">
      <div className="text-white">
        <p className="mb-8 font-BarlowCondensed uppercase tracking-[0.16875rem] md:text-left md:text-xl lg:mb-16 lg:text-3xl">
          <span className="mr-1 text-white opacity-25">01</span>
          Pick your Destination
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-40">
          <div className="relative mx-auto mb-7 aspect-square w-44 md:w-72 lg:w-full lg:max-w-md">
            <Image
              priority
              src={activeDestination.images.webp}
              alt={`Picture of ${activeDestination.name}`}
              layout="fill"
            />
          </div>

          <div>
            {/* Printing all the destinations */}
            <div className="mb-7 flex justify-center gap-5 text-secondary">
              {props.destinations.map((destination, index) => (
                // button that will change the destination
                <button
                  key={destination.name}
                  // changing state
                  onClick={() => {
                    setCurrent(index);
                  }}
                >
                  <p
                    // to underline the current destination
                    className={`tracking-[0.15rem] ${
                      activeDestination.name.toLowerCase() ===
                      destination.name.toLowerCase()
                        ? 'text-white underline decoration-[3px] underline-offset-8'
                        : ''
                    }`}
                  >
                    {destination.name}
                  </p>
                </button>
              ))}
            </div>
            <p className="mb-3 font-Bellefair text-6xl uppercase md:text-7xl lg:text-8xl">
              {activeDestination.name}
            </p>
            <p className="mb-8 font-Barlow text-secondary lg:text-lg">
              {activeDestination.description}
            </p>
            <div className="mb-8 h-0.5 w-full bg-gray-700"></div>
            {/* details about distance and time below line */}
            <div className="justify-center md:flex md:gap-24">
              <div className="mb-8 flex flex-col gap-3">
                <p className="tracking-[0.15rem] text-secondary">
                  Average Distance
                </p>
                <p className="font-Bellefair text-3xl">
                  {activeDestination.distance}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="tracking-[0.15rem] text-secondary">
                  Est. travel time
                </p>
                <p className="mb-14 font-Bellefair text-3xl">
                  {activeDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
