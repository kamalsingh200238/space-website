import Image from 'next/image';
import { useState } from 'react';

export default function DestinationContent(props) {
  // setting initial state as Moon (activeDestination is an object because that will help in rendering data to dom)
  const [activeDestination, setActiveDestination] = useState(
    props.destinations[0]
  );

  return (
    <div className="px-8 text-center font-BarlowCondensed md:px-24">
      <div className="text-white">
        <p className="mb-8 font-BarlowCondensed uppercase tracking-[0.16875rem] md:text-left md:text-sm">
          <span className="mr-1 text-white opacity-25">01</span>
          Pick your Destination
        </p>

        <div className="relative mx-auto mb-7 aspect-square w-44 md:w-72">
          <Image
            src={activeDestination.images.webp}
            alt={`Picture of ${activeDestination.name}`}
            layout="fill"
          />
        </div>

        {/* Printing all the destinations */}
        <div className="mb-7 flex justify-center gap-5 text-secondary">
          {props.destinations.map((destination) => (
            // button that will change the destination
            <button
              key={destination.name}
              // changing state
              onClick={() => {
                setActiveDestination(destination);
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
        <p className="mb-3 font-Bellefair text-6xl uppercase md:text-7xl">
          {activeDestination.name}
        </p>
        <p className="mb-8 font-Barlow text-secondary">
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
  );
}
