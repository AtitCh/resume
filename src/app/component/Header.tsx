'use client';
import React from 'react';

interface HeaderProps {
  onTabClick: (selectedTab: number) => void; // Function to handle tab click
  selectedTab: number; // Current selected tab index
}

const Header: React.FC<HeaderProps> = ({ onTabClick, selectedTab }) => {
  return (
    <div className="items-center justify-items-center">
      <div className="text-black">
        <div className="relative border-black group py-1.5 px-2.5 text-black text-3xl">
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all "></span>
          Atit Chanvenukool Resume
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 grid-rows-1 gap-10 mt-10 h-50">
          <button
            onClick={() => onTabClick(0)}
            className="relative border border-black group  py-1.5 px-2.5 text-black"
          >
            {selectedTab === 0 ? (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black w-full transition-all custom-shadow-kuro"></span>
            ) : (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all"></span>
            )}
            Home
          </button>
          <button
            onClick={() => onTabClick(1)}
            className="relative border border-black group  py-1.5 px-2.5 text-black"
          >
            {selectedTab === 1 ? (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black w-full transition-all custom-shadow-kuro"></span>
            ) : (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all"></span>
            )}
            <span className="sm:hidden">EXP</span>{' '}
            {/* Display on small screens */}
            <span className="hidden sm:inline">Experience</span>{' '}
            {/* Display on larger screens */}
          </button>
          <button
            onClick={() => onTabClick(2)}
            className="relative border border-black group  py-1.5 px-2.5 text-black"
          >
            {selectedTab === 2 ? (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black w-full transition-all custom-shadow-kuro"></span>
            ) : (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all"></span>
            )}
            Skill
          </button>
          <button
            onClick={() => onTabClick(3)}
            className="relative border border-black group  py-1.5 px-2.5 text-black"
          >
            {selectedTab === 3 ? (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black w-full transition-all custom-shadow-kuro"></span>
            ) : (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all"></span>
            )}
            <span className="sm:hidden">PRJ</span>{' '}
            {/* Display on small screens */}
            <span className="hidden sm:inline">Project</span>{' '}
            {/* Display on larger screens */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
