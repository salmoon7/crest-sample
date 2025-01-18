import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Crest</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Features Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900"
              >
                Features
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuItem>
                <span className="font-semibold text-gray-800">
                  Collaboration
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>Channels</DropdownMenuItem>
              <DropdownMenuItem>Messaging</DropdownMenuItem>
              <DropdownMenuItem>Huddles</DropdownMenuItem>
              <DropdownMenuItem>File Sharing</DropdownMenuItem>

              <DropdownMenuItem>
                <span className="font-semibold text-gray-800">
                  Project Management
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>Templates</DropdownMenuItem>
              <DropdownMenuItem>Lists</DropdownMenuItem>
              <DropdownMenuItem>Search</DropdownMenuItem>

              <DropdownMenuItem>
                <span className="font-semibold text-gray-800">
                  Integrations
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>Workflow Builder</DropdownMenuItem>
              <DropdownMenuItem>Apps & Integrations</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900"
              >
                Solutions
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem>For Teams</DropdownMenuItem>
              <DropdownMenuItem>For Enterprises</DropdownMenuItem>
              <DropdownMenuItem>For Startups</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Pricing Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900"
              >
                Pricing
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem>Basic</DropdownMenuItem>
              <DropdownMenuItem>Pro</DropdownMenuItem>
              <DropdownMenuItem>Enterprise</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#resources" className="text-gray-700 hover:text-gray-900">
            Resources
          </a>

          {/* Login & Sign Up */}
          <div className="hidden md:flex space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#392f5a] via-[#6247aa] to-[#03045e] text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Features
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuItem>
                  <span className="font-semibold text-gray-800">
                    Collaboration
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>Channels</DropdownMenuItem>
                <DropdownMenuItem>Messaging</DropdownMenuItem>
                <DropdownMenuItem>Huddles</DropdownMenuItem>
                <DropdownMenuItem>File Sharing</DropdownMenuItem>
                <DropdownMenuItem>Templates</DropdownMenuItem>
                <DropdownMenuItem>Lists</DropdownMenuItem>
                <DropdownMenuItem>Search</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Links */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Solutions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>For Teams</DropdownMenuItem>
                <DropdownMenuItem>For Enterprises</DropdownMenuItem>
                <DropdownMenuItem>For Startups</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Pricing
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>Basic</DropdownMenuItem>
                <DropdownMenuItem>Pro</DropdownMenuItem>
                <DropdownMenuItem>Enterprise</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#resources" className="text-gray-700 hover:text-gray-900">
              Resources
            </a>

            {/* Login & Sign Up */}
            <button className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
              Login
            </button>
            <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-[#392f5a] via-[#6247aa] to-[#03045e] text-white">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
