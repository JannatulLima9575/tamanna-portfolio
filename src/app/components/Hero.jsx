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
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-8 pt-24"
    >
      {/* Profile Image */}
      <div
        className="w-60 md:w-80 rounded-full overflow-hidden
        shadow-[0_0_25px_theme(colors.teal.600)]
        cursor-pointer transition duration-500
        hover:shadow-[0_0_25px_theme(colors.teal.600),0_0_35px_theme(colors.teal.600),0_0_55px_theme(colors.teal.600)]
        float-animation"
      >
        <img
          src="/profile.png"
          alt="Tamanna Akter"
          className="rounded-full w-full"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-xl text-left">
        <h3 className="text-3xl font-bold text-gray-800">Hello, Myself</h3>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-2 text-gray-900">
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
        <div className="flex gap-5 mt-6 text-teal-700 text-2xl">
          {[FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="border-2 border-teal-700 rounded-full p-2
                hover:bg-teal-700 hover:text-white transition duration-300"
                target="_blank"
              >
                <Icon />
              </a>
            )
          )}
        </div>

        {/* Download CV Button */}
        <a
          href="#"
          className="inline-block mt-6 bg-teal-700 text-white py-3 px-8 rounded-full
          font-semibold shadow-md
          hover:shadow-[0_0_20px_rgba(5,150,105,0.8),0_0_30px_rgba(5,150,105,0.6)]
          transition duration-500"
        >
          Download CV
        </a>
      </div>

      {/* ✅ Animation added inside component (No tailwind config needed) */}
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
