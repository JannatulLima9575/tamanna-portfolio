'use client';

import Image from 'next/image';
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
    image: '/ServicePoint.jpg',
    description:
      'Service listing platform where users can discover, manage and review services through a clean and user-friendly interface.',
    frontend: 'https://github.com/developerTamanna/services-stores-client',
    backend: 'https://github.com/developerTamanna/services-stores-server',
    live: 'https://services-store-app.web.app/',
  },
  {
    id: 2,
    title: 'Matrimony Platform',
    image: '/project2.png',
    description:
      'Modern matrimony web application with secure authentication, privacy-focused features and advanced search filters.',
    frontend: 'https://github.com/developerTamanna/matrimony-platform-client',
    backend: 'https://github.com/developerTamanna/matrimony-platform-server',
    live: 'https://matrimony-platform-df764.web.app/',
  },
  {
    id: 3,
    title: 'Sazin Construction – Client App',
    image: '/sazinp.png',
    description:
      'Real-time construction company website featuring services, project updates and company news.',
    frontend:
      'https://github.com/developerTamanna/sazin-group-construction-Ltd',
    backend:
      'https://github.com/developerTamanna/sazin-group-construction-Ltd-backend',
    live: 'https://sazin-group-construction-ltd.vercel.app/Services/Civil-construction/',
  },
  {
    id: 4,
    title: 'Sazin Construction – Admin Dashboard',
    image: '/sznadmin2.png',
    description:
      'Admin dashboard to manage projects, users and content with analytics and real-time updates.',
    frontend:
      'https://github.com/developerTamanna/sazin-group-construction-Ltd-backend',
    backend: 'https://github.com/developerTamanna/sazin-group-construction-Ltd',
    live: 'https://sazin-group-construction-ltd-backen.vercel.app/',
  },
  {
    id: 5,
    title: 'Construction CRM System',
    image: '/sznadmin2.png',
    description:
      'CRM system for handling clients, project workflow and internal team collaboration.',
    frontend:
      'https://github.com/developerTamanna/sazin-group-construction-Ltd-backend',
    backend: 'https://github.com/developerTamanna/sazin-group-construction-Ltd',
    live: 'https://sazin-group-construction-ltd-backen.vercel.app/',
  },
  {
    id: 6,
    title: 'Enterprise Management Dashboard',
    image: '/sznadmin2.png',
    description:
      'Enterprise-level dashboard for managing operations, reports and system roles.',
    frontend:
      'https://github.com/developerTamanna/sazin-group-construction-Ltd-backend',
    backend: 'https://github.com/developerTamanna/sazin-group-construction-Ltd',
    live: 'https://sazin-group-construction-ltd-backen.vercel.app/',
  },
];

const buttonClass =
  'inline-flex items-center gap-2 bg-[#007F73] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#00665c] transition';

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f9fafb] py-24">
      {/* same width as navbar/hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Selected <span className="text-[#007F73]">Projects</span>
        </h2>

        {/* ✅ 3 columns desktop, total 6 projects (2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200
                         hover:shadow-xl transition-shadow duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={project.frontend}
                    target="_blank"
                    className={buttonClass}
                  >
                    <FaCode /> Frontend
                  </a>

                  <a
                    href={project.backend}
                    target="_blank"
                    className={buttonClass}
                  >
                    <FaServer /> Backend
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className={buttonClass}
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  <Link href={`/projects/${project.id}`} className={buttonClass}>
                    <FaInfoCircle /> Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;