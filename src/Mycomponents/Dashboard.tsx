import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-red-100">
      {/* Dashboard Header */}
      <div className="p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center sm:text-left">
          Welcome to the Dashboard
        </h1>
      </div>

      {/* Dashboard Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-4 py-8 sm:flex-row sm:space-y-0 sm:space-x-8">
        {/* First Section */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center w-full max-w-xs sm:max-w-md">
          <div className="text-2xl font-bold text-gray-800">Crest</div>
        </div>

        {/* Second Section */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center w-full max-w-xs sm:max-w-md">
          <div className="text-2xl font-bold text-gray-800">Crest</div>
        </div>
      </div>

      {/* Wave Background at the Bottom */}
      <div className="relative w-full">
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#gradient)"
            fillOpacity="1"
            d="M0,96L60,96C120,96,240,96,360,101.3C480,107,600,117,720,128C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#6247aa" />
              <stop offset="100%" stopColor="#03045e" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;
