'use client';
import Link from 'next/link';
import {
  FaCode,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaServer,
} from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Services-Stores',
    image: '/p1.jpg',
    description:
      'A versatile platform where users can discover, manage, and review various services with a smooth interface.',
    frontend: 'https://github.com/developerTamanna/services-stores-client',
    backend: '#',
    live: 'https://services-store-app.web.app/',
  },
  {
    id: 2,
    title: 'Matrimony Platform',
    image: '/project2.png',
    description:
      'A modern matrimony website that helps individuals find their ideal match with privacy and powerful search filters.',
    frontend: 'https://github.com/developerTamanna/matrimony-platform-client',
    backend: 'https://github.com/developerTamanna/matrimony-platform-server',
    live: 'https://matrimony-platform-df764.web.app/',
  },
  {
    id: 3,
    title: 'Play Store Inspired',
    image: '/p3.jpg',
    description:
      'A Play Store-like platform where users can explore apps, rate them and post reviews using Firebase authentication.',
    frontend: '#',
    backend: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#d5fdf9] py-20 px-4 md:px-12">
      <h2 className="text-5xl font-bold text-center mb-20">
        My <span className="text-teal-600">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="min-h-[500px] bg-white rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(20,184,166,0.8)] transition-all duration-500 border border-transparent hover:border-teal-600 flex flex-col justify-between p-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl border-4 border-teal-600 shadow-[0_0_20px_rgba(5,150,105,0.7)] object-cover"
            />

            <h3 className="text-3xl font-semibold text-center mt-5">
              {project.title}
            </h3>

            <p className="text-lg text-gray-600 text-center mt-2 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-teal-600 text-white hover:bg-transparent hover:text-teal-600 hover:border-teal-600 border transition flex items-center gap-2"
              >
                <FaCode /> Frontend
              </a>

              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-teal-600 text-white hover:bg-transparent hover:text-teal-600 hover:border-teal-600 border transition flex items-center gap-2"
              >
                <FaServer /> Backend
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-teal-600 text-white hover:bg-transparent hover:text-teal-600 hover:border-teal-600 border transition flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live
              </a>

              <Link
                href={`/projects/${project.id}`}
                className="px-6 py-2 rounded-lg bg-teal-600 text-white hover:bg-transparent hover:text-teal-600 hover:border-teal-600 border transition flex items-center gap-2"
              >
                <FaInfoCircle /> Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
