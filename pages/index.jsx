import HomePageContent from '../components/HomepageContent';

export default function Home() {
  return (
    <>
      <div
        className={`absolute inset-0 -z-50 bg-home-mobile bg-cover bg-no-repeat md:bg-home-tablet lg:bg-home-desktop`}
      ></div>
      <HomePageContent />
    </>
  );
}
