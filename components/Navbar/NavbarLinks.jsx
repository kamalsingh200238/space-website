import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavbarLinks(props) {
  // function to toggle Navbar
  const toggleNavbar = () => {
    props.setNavIsOpen((prev) => !prev);
  };

  // using this to detect what url we are on so we can have underline in navbar dynamically
  const router = useRouter();

  return (
    <div
      className={`relative bg-white/20 text-lg text-white backdrop-blur-md transition-all duration-300 ease-in-out lg:min-w-[50%] mobile:fixed  mobile:inset-y-0 mobile:-right-2/3 mobile:w-2/3 mobile:bg-primary ${
        props.navIsOpen ? 'mobile:-translate-x-full' : ''
      }`}
    >
      <div className="absolute top-8 right-8">
        <button onClick={toggleNavbar} className="z-50 md:hidden">
          <div className="relative aspect-square w-7">
            <Image
              priority
              src="/shared/icon-close.svg"
              alt="Close Button"
              layout="fill"
              quality={100}
            />
          </div>
        </button>
      </div>
      <div className="flex items-center px-8 md:h-24 md:min-w-[50%] md:gap-12 md:px-12 lg:ml-16 lg:pr-20 mobile:mt-20 mobile:flex-col mobile:items-start mobile:space-y-5 mobile:pl-9">
        <Link href="/">
          <a
            onClick={toggleNavbar}
            className={` ${
              router.asPath === '/' ? 'border-b-[3px]' : ''
            } py-4 md:py-8`}
          >
            <span className="mr-2 md:hidden lg:inline-block">00</span>Home
          </a>
        </Link>
        <Link href="/destination">
          <a
            onClick={toggleNavbar}
            className={` ${
              router.asPath === '/destination' ? 'border-b-[3px]' : ''
            } py-4 md:py-8`}
          >
            <span className="mr-2 md:hidden lg:inline-block">01</span>
            Destination
          </a>
        </Link>
        <Link href="/crew">
          <a
            onClick={toggleNavbar}
            className={` ${
              router.asPath === '/crew' ? 'border-b-[3px]' : ''
            } py-4 md:py-8`}
          >
            <span className="mr-2 md:hidden lg:inline-block">02</span>Crew
          </a>
        </Link>
        <Link href="/technology">
          <a
            onClick={toggleNavbar}
            className={` ${
              router.asPath === '/technology' ? 'border-b-[3px]' : ''
            } py-4 md:py-8`}
          >
            <span className="mr-2 md:hidden lg:inline-block">03</span>Technology
          </a>
        </Link>
      </div>
    </div>
  );
}
