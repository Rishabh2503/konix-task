// pages/index.js or any other page
import CryptoDashboard from '../components/CryptoDashboard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Page() {
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <CryptoDashboard />
      </div>
      <div className="lg:col-span-1">
        <Sidebar />
      </div>
    </div>
    </>
  );
}