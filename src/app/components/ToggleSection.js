import React, { useState } from "react";

function ToggleSection({ onSectionChange }) {
  const [activeSection, setActiveSection] = useState("Overview");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (onSectionChange) {
      onSectionChange(section); // Call the parent function if provided
    }
  };

  return (
    <div>
      <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
        {["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"].map((section) => (
          <div
            key={section}
            className={`cursor-pointer ${activeSection === section ? "text-[#0141CF] border-[#0052FE] border-b-4 pb-4" : ""}`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </div>
        ))}
      </div>
      <hr className="" />
    </div>
  );
}

export default ToggleSection; 