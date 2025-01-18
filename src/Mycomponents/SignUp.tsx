import React, { useState } from "react";
import {
  LockIcon,
  UserIcon,
  PhoneIcon,
  BeerIcon,
  MailIcon,
} from "lucide-react";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    phoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirecting to dashboard without authentication
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4 flex items-center">
            <UserIcon className="h-5 w-5 text-gray-500 mr-2" />
            <label
              htmlFor="fullname"
              className="block text-sm font-medium flex-grow"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <MailIcon className="h-5 w-5 text-gray-500 mr-2" />
            <label
              htmlFor="email"
              className="block text-sm font-medium flex-grow"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <LockIcon className="h-5 w-5 text-gray-500 mr-2" />
            <label
              htmlFor="password"
              className="block text-sm font-medium flex-grow"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <BeerIcon className="h-5 w-5 text-gray-500 mr-2" />
            <label
              htmlFor="gender"
              className="block text-sm font-medium flex-grow"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-6 flex items-center">
            <PhoneIcon className="h-5 w-5 text-gray-500 mr-2" />
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium flex-grow"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#392f5a] via-[#6247aa] to-[#03045e] text-white py-2 rounded-md hover:opacity-90"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6">
          <p className="text-center text-gray-600">Or continue with</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100">
              <img
                src="/icons/google.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Google
            </button>
            <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100">
              <img
                src="/icons/microsoft.svg"
                alt="Microsoft"
                className="h-5 w-5 mr-2"
              />
              Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
