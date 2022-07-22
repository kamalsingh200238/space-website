import HomePageContent from '../components/HomepageContent';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Website</title>
        <link rel="shortcut icon" href="/shared/logo.svg" type="image/x-icon" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {/* Background Images for different devices */}
      <div className={`absolute inset-0 -z-50`}>
        <div className="relative hidden h-full lg:block">
          <Image
            priority
            src="/home/background-home-desktop.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative hidden h-full omd:block">
          <Image
            priority
            src="/home/background-home-tablet.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative h-full md:hidden">
          <Image
            priority
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
