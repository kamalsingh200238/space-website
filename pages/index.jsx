import Head from 'next/head';

// Components
import BackgroungImage from '../components/BackgroundImage';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <main className="">
      <BackgroungImage />
      <Navbar />
    </main>
  );
}
