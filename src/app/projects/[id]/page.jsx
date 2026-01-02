'use client';
import { useParams, useRouter } from 'next/navigation';

const projectsData = [
  {
    id: 1,
    title: 'Services-Stores',
    images: ['/p1.jpg', '/p1-mobile.jpg'],
    description:
      '“Services-Stores” is a modern platform where users can discover, manage, and review various services effortlessly. The design focuses on user experience, responsive layout, and real-time interaction. and.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Firebase',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    frontend: 'https://github.com/developerTamanna/services-stores-client',
    backend: 'https://github.com/developerTamanna/services-stores-server',
    live: 'https://services-store-app.web.app/',
  },
  {
    id: 2,
    title: 'Matrimony Platform',
    images: ['/project2.png', '/project2-mobile.png'],
    description:
      'This project is a secure Matrimony website that helps users find their perfect match with advanced filters and privacy controls. Admin dashboard included for management.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Firebase Auth'],
    frontend: 'https://github.com/developerTamanna/matrimony-platform-client',
    backend: 'https://github.com/developerTamanna/matrimony-platform-server',
    live: 'https://matrimony-platform-df764.web.app/',
  },
];

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h2 className="text-2xl text-gray-600">Project not found.</h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-gray-600 hover:text-[#007F73] transition-colors duration-200 group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#007F73] mb-6 text-center">
            {project.title}
          </h1>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {project.description}
            </p>
          </div>

          {/* Screenshots */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
              >
                <img
                  src={img}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-[#007F73] rounded-full mr-3"></span>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-[#007F73] transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Project Links
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {project.frontend && project.frontend !== '#' && (
                <a
                  href={project.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 rounded-lg bg-[#007F73] text-white hover:bg-[#005f56] transition-colors duration-200 border border-[#007F73]"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Frontend Code
                </a>
              )}

              {project.backend && project.backend !== '#' && (
                <a
                  href={project.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#007F73] border border-[#007F73] hover:bg-[#007F73] hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                  Backend Code
                </a>
              )}

              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#007F73] border border-[#007F73] hover:bg-[#007F73] hover:text-white transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
