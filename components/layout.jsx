import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
