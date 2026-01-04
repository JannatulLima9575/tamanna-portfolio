import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        flex flex-col md:flex-row
        justify-center items-center
        gap-12
        bg-[#d5fdf9]
        px-6 md:px-16
        py-20
      "
    >
      <div
        className="
    relative
    w-64 sm:w-72 md:w-80
    aspect-4/5
    md:max-h-[420px]
    rounded-xl
    border-4 border-[#007F73]
    overflow-hidden
    shadow-[0_0_25px_rgba(0,127,115,0.6)]
    transition duration-500
    hover:shadow-[0_0_35px_rgba(0,127,115,0.8)]
  "
      >
        <Image
          src="/rear-view-muslim-female-programmer-hijab-sitting-front-computer-screen_274679-44363.avif"
          alt="About Tamanna Akter"
          fill
          sizes="(max-width: 768px) 16rem, (max-width: 1024px) 18rem, 20rem"
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-[#007F73]">Me</span>
        </h2>

        <h3 className="text-2xl md:text-3xl mt-4 font-semibold text-gray-700">
          I'm a <span className="text-[#007F73]">MERN Stack Developer</span>
        </h3>

        <p className="text-base md:text-lg mt-4 text-gray-600 leading-relaxed">
          MERN Stack Developer with hands-on experience in building dynamic and
          responsive web applications using MongoDB, Express.js, React, and
          Node.js. Skilled in creating seamless user experiences, managing
          databases efficiently, and integrating RESTful APIs. Dedicated to
          writing clean, maintainable code and continuously enhancing skills
          through learning, collaboration, and real-world project development.
        </p>

        <a
          href="#"
          className="
            inline-block mt-6
            bg-[#007F73] text-white
            py-3 px-6
            rounded-full
            font-semibold
            shadow-md
            hover:shadow-lg
            transition
          "
        >
          Read more
        </a>
      </div>
    </section>
  );
}
