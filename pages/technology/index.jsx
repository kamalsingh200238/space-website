import Image from 'next/image';
import TechContent from '../../components/TechContent';

// for getstaticprops(getting data from posts)
import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/posts/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}

export default function Technology({ technology }) {
  return (
    <>
      {/* Background Images for different devices */}
      <div className={`absolute inset-0 -z-50`}>
        <div className="relative hidden h-full lg:block">
          <Image
            priority
            src="/technology/background-technology-desktop.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative hidden h-full omd:block">
          <Image
            priority
            src="/technology/background-technology-tablet.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative h-full md:hidden">
          <Image
            priority
            src="/technology/background-technology-mobile.jpg"
            layout="fill"
            alt="Background Image"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <TechContent technology={technology} />
    </>
  );
}
