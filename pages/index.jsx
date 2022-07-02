import Head from 'next/head';

// Components
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <section
      className={`bg-home-mobile bg-no-repeat bg-cover md:bg-home-tablet lg:bg-home-desktop h-screen`}
    >
      <Navbar />
      
    </section>
  );
}
