// pages/index.js
'use client';
import React from 'react';
import CryptoDashboard from './components/CryptoDashboard';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Sidebar from './components/Sidebar'; // Assuming you have a Sidebar component
import Breadcrumb from './components/Breadcrumb';
import TrendingCoinsCarousel from './components/TrendingCarousel';
import About from './components/About';
import PerformanceSection from './components/PerformanceSection';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <Navbar />

      <div className="flex flex-col md:flex-row mt-16">
        {/* Main Content Area */}
        <div className="flex-1 p-2 md:px-6 overflow-hidden">
          <div className="flex">
            <Breadcrumb />
          </div>
          <CryptoDashboard />
          {/* <TrendingCoinsCarousel /> */}
          
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 bg-gray-100 overflow-hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Page;
