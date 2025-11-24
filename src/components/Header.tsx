import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <div className="text-2xl font-bold">
          MySite
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>

        {/* Action Button */}
        <div>
          <Button variant="outline" className="text-white border-white hover:bg-gray-700">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
