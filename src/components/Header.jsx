'use client';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#007F73] text-white shadow-md">
      <h1 className="text-3xl font-bold">Tamanna Akter</h1>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <FiMenu className="text-3xl cursor-pointer" />
      </div>
      <nav
        className={`${
          open ? 'right-0' : '-right-full'
        } absolute md:static top-full md:flex flex-col md:flex-row bg-[#007F73] w-[250px] md:w-auto min-h-screen md:min-h-0 transition-all duration-500 md:space-x-8 items-center`}
      >
        {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-semibold py-3 md:py-0 hover:text-black"
              onClick={(e) => handleClick(e, item.toLowerCase())}
            >
              {item}
            </a>
          )
        )}
      </nav>
    </header>
  );
}
