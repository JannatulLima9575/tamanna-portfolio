'use client';

import { useEffect, useRef } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Frontend Developer', 'Backend Developer', 'Web Designer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-6 md:px-16 pt-28"
    >
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left">
        {/* light grey title */}
        <h3 className="text-3xl font-bold text-gray-400">Hello, Myself</h3>

        <h1 className="text-5xl md:text-5xl font-extrabold mt-2 text-gray-900">
          Tamanna Akter
        </h1>

        <h3 className="text-3xl mt-2 text-gray-700">
          And I'm a{' '}
          <span ref={typedRef} className="text-teal-700 font-semibold"></span>
        </h3>

        <p className="text-lg mt-4 text-gray-600 leading-relaxed">
          I craft intuitive, high-performance web applications that turn ideas
          into digital reality — using modern technologies.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 mt-6 text-teal-700 text-2xl">
          <a
            href="https://www.linkedin.com/in/tamanna-akter57/"
            target="_blank"
            className="border-2 border-teal-700 rounded-full p-2 hover:bg-teal-700 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://web.facebook.com/tamanna.sultana.sathi.2025/"
            target="_blank"
            className="border-2 border-teal-700 rounded-full p-2 hover:bg-teal-700 hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/TamannaAkt43608"
            target="_blank"
            className="border-2 border-teal-700 rounded-full p-2 hover:bg-teal-700 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/astamanna576/"
            target="_blank"
            className="border-2 border-teal-700 rounded-full p-2 hover:bg-teal-700 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/developerTamanna"
            target="_blank"
            className="border-2 border-teal-700 rounded-full p-2 hover:bg-teal-700 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href="#"
          className="inline-block mt-6 bg-teal-700 text-white py-3 px-8 rounded-full
          font-semibold shadow-md hover:shadow-[0_0_20px_rgba(5,150,105,0.8)]
          transition duration-500"
        >
          Download CV
        </a>
      </div>

      {/* Profile Image on Right */}
      <div
        className="w-60 md:w-80 rounded-full overflow-hidden
        shadow-[0_0_25px_theme(colors.teal.600)]
        cursor-pointer transition duration-500
        hover:shadow-[0_0_25px_theme(colors.teal.600),0_0_35px_theme(colors.teal.600)]
        float-animation"
      >
        <img
          src="/profile.png"
          alt="Tamanna Akter"
          className="rounded-full w-full"
        />
      </div>

      {/* Floating Animation */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
