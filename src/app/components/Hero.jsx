"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Backend Developer", "Web Designer"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-screen pt-24 md:pt-0 pb-10 md:pb-0 flex items-center">
      <div
        className="
          max-w-7xl mx-auto px-6
          flex flex-col-reverse md:flex-row
          items-center
          justify-center md:justify-between
          gap-12
        "
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-400">
            # Hello, Myself
          </h3>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 text-gray-900">
            Tamanna Akter
          </h1>

          <h3 className="text-2xl md:text-3xl mt-3 text-gray-700">
            And I&apos;m a{" "}
            <span ref={typedRef} className="text-teal-700 font-semibold"></span>
          </h3>

          <p className="text-base md:text-lg mt-4 text-gray-600 leading-relaxed">
            I craft intuitive, high-performance web applications that turn ideas
            into digital reality using modern technologies.
          </p>

          <div className="flex justify-center md:justify-start gap-5 mt-6 text-teal-700 text-xl md:text-2xl">
            {[
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/tamanna-akter57/",
              },
              {
                icon: <FaFacebook />,
                link: "https://web.facebook.com/tamanna.sultana.sathi.2025/",
              },
              {
                icon: <FaTwitter />,
                link: "https://x.com/TamannaAkt43608",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/astamanna576/",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/developerTamanna",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  border-2 border-teal-700 rounded-full p-2
                  hover:bg-teal-700 hover:text-white
                  transition duration-300
                "
              >
                {item.icon}
              </a>
            ))}
          </div>

          <a
            href="/Tamanna Akter Full-Stack Resume.pdf"
            download
            className="
              inline-block mt-6
              bg-teal-700 text-white
              py-3 px-8 rounded-full
              font-semibold
              shadow-md
              hover:shadow-[0_0_20px_rgba(5,150,105,0.8)]
              transition duration-500
            "
          >
            Download Resume
          </a>
        </div>

        <div
          className="
            relative
            w-52 sm:w-60 md:w-72 lg:w-80
            aspect-square
            rounded-full overflow-hidden
            shadow-[0_0_25px_theme(colors.teal.600)]
            transition duration-500
            hover:shadow-[0_0_35px_theme(colors.teal.600)]
            float-animation
          "
        >
          <Image
            src="/profile.png"
            alt="Tamanna Akter"
            fill
            sizes="(max-width: 768px) 14rem, (max-width: 1024px) 18rem, 20rem"
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>

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
