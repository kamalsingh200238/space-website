// components
import CrewContent from '../../components/CrewContent';

import Image from 'next/image';

// for getstatic props
import fsPromises from 'fs/promises';
import path from 'path';
import Head from 'next/head';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/posts/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

export default function Crew({ crew }) {
  return (
    <>
      <Head>
        <title>Crew | Space Website</title>
        <link rel="shortcut icon" href="/shared/logo.svg" type="image/x-icon" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {/* Background Images for different devices */}
      <div className={`absolute inset-0 -z-50`}>
        <div className="relative hidden h-full lg:block">
          <Image
            priority
            src="/crew/background-crew-desktop.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative hidden h-full omd:block">
          <Image
            priority
            src="/crew/background-crew-tablet.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative h-full md:hidden">
          <Image
            priority
            src="/crew/background-crew-mobile.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      {/* content of the page */}
      {/* passing the data of crew to the component */}
      <CrewContent crew={crew} />
    </>
  );
}
