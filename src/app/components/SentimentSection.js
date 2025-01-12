import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { IoMdInformationCircle } from 'react-icons/io';

function SentimentSection() {
  return (
    <div className="bg-white rounded-lg my-5 p-4 md:p-6 max-w-[1128px]">
      <h2 className="text-2xl font-semibold text-[#0F1629] mb-4">Sentiment</h2>

      {/* Key Events Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-[#44475B] font-semibold text-xl">Key Events</h3>
          <IoMdInformationCircle className="text-[#ABB9BF] text-lg" />
        </div>

        {/* Events Cards Container */}
        <div className="flex flex-col md:flex-row gap-4 overflow-x-auto">
          {/* First Event Card */}
          <div className="min-w-[300px] md:w-1/2 bg-[#E8F4FD] rounded-xl p-4">
            <div className="flex gap-3">
              <div className="bg-[#0082FF] w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13.2569V10.4569H7.8V13.2569H5ZM19 2.74846C18.9978 2.19296 18.7755 1.66097 18.382 1.26896C17.9884 0.876952 17.4555 0.656856 16.9 0.65686H2.7922C2.23525 0.65686 1.7011 0.87811 1.30728 1.27194C0.913449 1.66576 0.6922 2.19991 0.6922 2.75686V15.3569C0.6922 16.2851 1.06095 17.1754 1.71733 17.8317C2.3737 18.4881 3.26394 18.8569 4.1922 18.8569H19.8078C20.7361 18.8569 21.6263 18.4881 22.2827 17.8317C22.939 17.1754 23.3078 16.2851 23.3078 15.3569V6.95686C23.3078 6.39991 23.0865 5.86576 22.6927 5.47194C22.2989 5.07811 21.7648 4.85686 21.2078 4.85686H20.4V14.9789C20.4 15.1645 20.3263 15.3426 20.195 15.4738C20.0637 15.6051 19.8857 15.6789 19.7 15.6789C19.5143 15.6789 19.3363 15.6051 19.205 15.4738C19.0737 15.3426 19 15.1645 19 14.9789V2.74846ZM3.6 5.55686C3.6 5.37121 3.67375 5.19316 3.80503 5.06189C3.9363 4.93061 4.11435 4.85686 4.3 4.85686H15.5C15.6857 4.85686 15.8637 4.93061 15.995 5.06189C16.1262 5.19316 16.2 5.37121 16.2 5.55686C16.2 5.74251 16.1262 5.92056 15.995 6.05184C15.8637 6.18311 15.6857 6.25686 15.5 6.25686H4.3C4.11435 6.25686 3.9363 6.18311 3.80503 6.05184C3.67375 5.92056 3.6 5.74251 3.6 5.55686Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm md:text-base font-medium text-[#191C1F] mb-2">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h4>
                <p className="text-sm text-[#3E5765]">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum.
                </p>
              </div>
            </div>
          </div>

          {/* Second Event Card */}
          <div className="min-w-[300px] md:w-1/2 bg-[#EBF9F4] rounded-xl p-4">
            <div className="flex gap-3">
              <div className="bg-[#0FBA83] w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2308 8.12378H25V14.893M25 8.12378L15.4385 17.6853C15.2803 17.8404 15.0676 17.9272 14.8462 17.9272C14.6247 17.9272 14.412 17.8404 14.2538 17.6853L10.3615 13.793C10.2034 13.638 9.99071 13.5511 9.76923 13.5511C9.54775 13.5511 9.33509 13.638 9.17692 13.793L3 19.9699"
                    stroke="white"
                    strokeWidth="1.69231"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 relative">
                <h4 className="text-sm md:text-base font-medium text-[#191C1F] mb-2">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h4>
                <p className="text-sm text-[#3E5765] pr-8">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum.
                </p>
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <FaAngleRight className="text-[#757779]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-[#44475B] font-semibold text-xl">
            Analyst Estimates
          </h3>
          <IoMdInformationCircle className="text-[#ABB9BF] text-lg" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="bg-[#EBF9F4] text-[#0FBA83] text-4xl font-bold rounded-full p-6 md:p-8 flex items-center justify-center min-w-[120px]">
            76<span className="text-lg">%</span>
          </div>

          <div className="flex-1 w-full max-w-md space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[#7C7E8C] text-sm w-12">Buy</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-lg">
                <div className="bg-[#00B386] h-full rounded-lg w-[76%]" />
              </div>
              <span className="text-[#7C7E8C] text-sm w-12">76%</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#7C7E8C] text-sm w-12">Hold</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-lg">
                <div className="bg-[#C7C8CE] h-full rounded-lg w-[8%]" />
              </div>
              <span className="text-[#7C7E8C] text-sm w-12">8%</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#7C7E8C] text-sm w-12">Sell</span>
              <div className="flex-1 h-2 bg-gray-100 rounded-lg">
                <div className="bg-[#F7324C] h-full rounded-lg w-[16%]" />
              </div>
              <span className="text-[#7C7E8C] text-sm w-12">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentimentSection;
