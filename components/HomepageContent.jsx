import Link from 'next/link';

export default function MainContent() {
  return (
    <div className="mt-6 px-6 pb-12 text-secondary md:mt-24 md:px-32 md:pb-24 lg:mt-60 lg:pb-32">
      <div className="mx-auto grid max-w-[90%] place-items-center gap-y-20 gap-x-20 text-center md:gap-40 lg:grid-cols-2 lg:text-left">
        <div className="">
          <p className="font-BarlowCondensed text-xl uppercase tracking-[0.21875rem]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <span className="my-6  block w-full font-Bellefair text-7xl uppercase md:text-[9.375rem]">
            Space
          </span>
          <p className="text-center font-Barlow lg:text-left lg:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:justify9-self-center lg:self-end">
          <Link href="/destination">
            <button className="inline-block aspect-square w-40 rounded-full bg-white text-primary md:w-60 md:text-2xl">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
