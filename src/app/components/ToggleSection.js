import React, { useState } from 'react';

function ToggleSection({ onSectionChange }) {
  const [activeSection, setActiveSection] = useState('Overview');

  const handleSectionClick = section => {
    setActiveSection(section);
    if (onSectionChange) {
      onSectionChange(section); // Call the parent function if provided
    }
  };

  return (
    <div>
      <div className="flex space-x-4 md:space-x-6 lg:space-x-10 text-xs md:text-sm font-medium text-[#3E424A] py-1 md:py-4 overflow-x-hidden">
        {[
          'Overview',
          'Fundamentals',
          'News Insights',
          'Sentiments',
          'Team',
          'Technicals',
          'Tokenomics'
        ].map(section =>
          <div
            key={section}
            className={`flex-1 cursor-pointer text-center ${activeSection ===
            section
              ? 'text-[#0141CF] border-[#0052FE]  border-b-4 pb-1'
              : ''} whitespace-nowrap`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </div>
        )}
      </div>
      <hr className="" />
    </div>
  );
}

export default ToggleSection;
