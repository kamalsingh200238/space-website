import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavbarLinks() {
  const router = useRouter();
  return (
    <div className="bg-white/20 text-lg text-white backdrop-blur-md mobile:fixed mobile:inset-y-0 mobile:-right-2/3 mobile:w-2/3 lg:min-w-[50%] ">
      <button className="z-10 m-8 mb-16 ml-64 md:hidden">
        <Image
          src="/shared/icon-close.svg"
          alt="Close Button"
          width={24}
          height={24}
        />
      </button>
      <div className="flex h-24 items-center  gap-12 px-8 mobile:flex-col mobile:space-y-9 mobile:pl-9 md:min-w-[50%] md:px-12 lg:ml-16 lg:pr-20">
        <Link href="/">
          <a
            className={` ${
              router.asPath === '/' ? 'border-b-[3px]' : ''
            } py-4 md:py-8`}
          >
            <span className="mr-2 md:hidden lg:inline-block">00</span>Home
          </a>
        </Link>
        <Link href="/destination">
          <a
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
            className={` ${
              router.asPath === '/crew' ? 'border-b-[3px]' : ''
            } py-4 md:py-8`}
          >
            <span className="mr-2 md:hidden lg:inline-block">02</span>Crew
          </a>
        </Link>
        <Link href="/technology">
          <a
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
