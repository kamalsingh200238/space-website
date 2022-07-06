import HomePageContent from '../components/HomepageContent';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Background Images for different devices */}
      <div className={`absolute inset-0 -z-50`}>
        <div className="relative hidden h-full lg:block">
          <Image
            src="/home/background-home-desktop.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative hidden h-full omd:block">
          <Image
            src="/home/background-home-tablet.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative h-full md:hidden">
          <Image
            src="/home/background-home-mobile.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <HomePageContent />
    </>
  );
}
