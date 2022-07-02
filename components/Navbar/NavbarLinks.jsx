import Image from 'next/image';
import Link from 'next/link';

export default function NavbarLinks() {
  return (
    <div className="mobile:fixed mobile:inset-y-0 mobile:-right-2/3 mobile:w-2/3 bg-purple-700/10">
      <button className="z-10 m-8 mb-16 ml-64 md:hidden">
        <Image
          src="/shared/icon-close.svg"
          alt="Close Button"
          width={24}
          height={24}
        />
      </button>
      <div className="flex mobile:flex-col mobile:pl-9 mobile:space-y-9 gap-9 px-8 py-4 lg:pr-20">
        <Link href="/">
          <a>
            <span className="mr-2">00</span>Home
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="mr-2">01</span>Destination
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="mr-2">02</span>Crew
          </a>
        </Link>
        <Link href="/">
          <a>
            <span className="mr-2">03</span>Technology
          </a>
        </Link>
      </div>
    </div>
  );
}
