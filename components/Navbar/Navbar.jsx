import Image from 'next/image';
import NavbarLinks from './NavbarLinks';

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center pt-6 w-screen overflow-x-hidden">
        <div className="mx-6 ">
          <Image
            src="/shared/logo.svg"
            alt="Website Logo"
            width={40}
            height={40}
          />
        </div>
        <div className="mx-6">
          <Image
            src="/shared/icon-hamburger.svg"
            alt="Menu Icon"
            width={32}
            height={26}
          />
        </div>
        <NavbarLinks />
      </nav>
    </>
  );
}
