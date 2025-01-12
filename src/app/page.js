'use client';
import React from 'react';
import CryptoDashboard from './components/CryptoDashboard';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Sidebar from './components/Sidebar'; // Assuming you have a Sidebar component
import Breadcrumb from './components/Breadcrumb';

import SuggestionSection from './components/SuggestionSection';

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

        {/* Sidebar (mobile: below SuggestionSection, md+: on the right) */}
        <div className="hidden md:block w-full md:w-1/4 p-4 bg-gray-100 overflow-hidden md:mt-0 mt-4">
          <Sidebar />
        </div>
      </div>

      {/* Suggestion Section */}
      <SuggestionSection />
      <div className="md:hidden w-full md:w-1/4 p-4 bg-gray-100 overflow-hidden order-2 md:order-1 md:mt-0 mt-4">
          <Sidebar />
        </div>
    </div>
  );
};

export default Page;
