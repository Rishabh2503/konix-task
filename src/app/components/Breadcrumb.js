'use client';
import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="bg-gray-100 px-1 py-2  flex-1">
      <span className="text-gray-500">Cryptocurrencies</span>
      <span className="text-gray-500 mx-2"> &gt;&gt; </span>
      <span className="font-normal text-gray-900">Bitcoin</span>
    </div>
  );
};

export default Breadcrumb; 