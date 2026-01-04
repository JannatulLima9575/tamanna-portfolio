'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#007F73] text-white shadow-md">
      {/* 7xl wrapper */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-bold">Tamanna Akter</h1>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
        </button>

        {/* Navigation menu */}
        <nav
          className={`absolute md:static top-[72px] right-0
          bg-[#007F73] flex flex-col md:flex-row
          items-center md:space-x-8
          transition-all duration-500
          w-[250px] md:w-auto
          min-h-screen md:min-h-0
          ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
          md:opacity-100 md:translate-x-0`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold py-3 md:py-0 hover:text-black transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}