export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 bg-[#d5fdf9] px-8 py-20"
    >
      <div className="max-w-xl">
        <h2 className="text-6xl font-bold">
          About <span className="text-[#007F73]">Me</span>
        </h2>
        <h3 className="text-3xl mt-4">
          I'm a <span className="text-[#007F73]">MERN STACK Developer</span>
        </h3>
        <p className="text-lg mt-4">
          MERN Stack Developer with hands-on experience in building dynamic and
          responsive web applications using MongoDB, Express.js, React, and
          Node.js. Skilled in creating seamless user experiences, managing
          databases efficiently, and integrating RESTful APIs. Dedicated to
          writing clean, maintainable code and continuously enhancing skills
          through learning, collaboration, and real-world project development.
        </p>
        <a
          href="#"
          className="inline-block mt-6 bg-[#007F73] text-white py-3 px-6 rounded-full hover:shadow-lg transition"
        >
          Read more
        </a>
      </div>
      <div className="w-60 md:w-80 rounded-full border-4 border-[#007F73] shadow-[0_0_25px_var(--main-color)] overflow-hidden">
        <img src="/about.png" alt="About" className="rounded-full" />
      </div>
    </section>
  );
}
