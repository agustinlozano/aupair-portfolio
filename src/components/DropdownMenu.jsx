import React, { useState } from 'react';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  // when the user clicks outside the dropdown menu, close it
  // document.addEventListener('click', (e) => {
  //   if (e.target.id !== 'options-menu') {
  //     setOpen(false);
  //   }
  // });

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
          {/* svg menu icon */}
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="options-menu" role="menu"
        style={{ display: open ? 'block' : 'none' }}
      >
        <div className="py-1" role="none">
          {/* Menu items */}
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="options-menu-0"
              // move to #experience section smoothly
              onClick={() => {
                document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' });
                setOpen(false);
              }}
            >
              Experience
            </a>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="options-menu-1">
              About Me
            </a>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="options-menu-2">
              Contact
            </a>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
