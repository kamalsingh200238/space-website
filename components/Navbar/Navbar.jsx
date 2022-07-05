import Image from 'next/image';
import NavbarLinks from './NavbarLinks';

export default function Navbar() {
  return (
    <>
      <nav className="mb-6 flex items-center justify-between p-6 font-BarlowCondensed md:mb-24 md:p-0">
        {/* main Logo in navbar */}
        <div className="relative aspect-square w-10 md:m-6 md:w-12">
          <Image
            src="/shared/logo.svg"
            alt="Website Logo"
            layout="fill"
            quality={100}
          />
        </div>
        {/* hamburger icon */}
        <div className="relative h-5 w-6 md:hidden">
          <Image
            src="/shared/icon-hamburger.svg"
            alt="Menu Icon"
            layout="fill"
          />
        </div>
        {/* navbar links */}
        <NavbarLinks />
      </nav>
    </>
  );
}
