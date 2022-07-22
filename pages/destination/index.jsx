import Image from 'next/image';

// for getStaticProps
import fsPromises from 'fs/promises';
import path from 'path';

// components
import DestinationContent from '../../components/DestinationContent';
import Head from 'next/head';
import { useEffect } from 'react';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/posts/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: objectData,
  };
}

export default function Destination({ destinations }) {
  return (
    <>
      <Head>
        <title>Destination | Space Website</title>
        <link rel="shortcut icon" href="/shared/logo.svg" type="image/x-icon" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {/* Background images for different devices */}
      <div className={`absolute inset-0 -z-50`}>
        <div className="relative hidden h-full lg:block">
          <Image
            priority
            src="/destination/background-destination-desktop.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative hidden h-full omd:block">
          <Image
            priority
            src="/destination/background-destination-tablet.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative h-full md:hidden">
          <Image
            priority
            src="/destination/background-destination-mobile.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <DestinationContent destinations={destinations} />
    </>
  );
}
