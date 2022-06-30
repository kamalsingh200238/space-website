import Image from 'next/image';
import Link from 'next/link';

export default function NavbarLinks() {
  return (
    <div className="fixed inset-y-0 -right-2/3 w-2/3 bg-purple-700/10">
      <button className="z-10 m-8 mb-16 ml-64">
        <Image
          src="/shared/icon-close.svg"
          alt="Close Button"
          width={24}
          height={24}
        />
      </button>
      <div className="flex flex-col pl-9 space-y-9">
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
