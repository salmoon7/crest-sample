import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f8edeb] min-h-[80vh] flex items-center justify-center px-6 md:px-12 lg:px-20 mb-10 md:mb-0">
      <div className="max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          The Ultimate Hub for Work
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          Unify your workflow with a single platform designed to handle every
          aspect of your work. Communicate, manage tasks, and host meetings
          seamlessly — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          {/* Get Started Button */}
          <Link
            to="/dashboard"
            className="px-8 py-3 text-lg font-medium rounded-md bg-gradient-to-r from-[#392f5a] via-[#6247aa] to-[#03045e] text-white hover:opacity-90"
          >
            Get Started. It’s FREE
          </Link>
          {/* Secondary Text */}
          <span className="text-gray-600 text-sm md:text-base">
            Free Forever. No Credit Card Required.
          </span>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Task Management
            </h3>
            <p className="mt-2 text-gray-600">
              Easily organize, track, and complete your tasks.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Seamless Collaboration
            </h3>
            <p className="mt-2 text-gray-600">
              Enable your team to chat, connect, and stay updated in real-time.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Boards and Smart Meetings
            </h3>
            <p className="mt-2 text-gray-600">
              Visualize your work with boards and run meetings without hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
