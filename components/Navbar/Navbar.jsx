import Image from 'next/image';
import { useState } from 'react';
import NavbarLinks from './NavbarLinks';

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNavbar = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-6 font-BarlowCondensed md:p-0 lg:pt-10">
        {/* main Logo in navbar */}
        <div className="relative aspect-square w-10 md:m-6 md:w-12 lg:mx-12">
          <Image
            src="/shared/logo.svg"
            alt="Website Logo"
            layout="fill"
            quality={100}
          />
        </div>
        {/* hamburger icon */}
        <button onClick={toggleNavbar} className="relative h-5 w-6 md:hidden">
          <Image
            src="/shared/icon-hamburger.svg"
            alt="Menu Icon"
            layout="fill"
          />
        </button>
        {/* navbar links */}
        <NavbarLinks navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      </nav>
    </>
  );
}
