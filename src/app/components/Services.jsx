import { FaCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

export default function Services({ hideTitle = false }) {
  const services = [
    {
      icon: <FaCode />,
      title: 'MERN-Stack Development',
      description: 'Dynamic, secure, and responsive web apps.',
    },
    {
      icon: <FaPalette />,
      title: 'Frontend Design',
      description: 'Clean and modern user-friendly interfaces.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Backend & API',
      description: 'RESTful APIs and smooth data flow.',
    },
  ];

  return (
    <section id="services" className="py-20 px-8">
      {/* Conditional Title - শুধু show করবে যখন hideTitle false */}
      {!hideTitle && (
        <h2 className="text-center text-5xl font-bold mb-12">
          My <span className="text-[#007F73]">Services</span>
        </h2>
      )}

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#d5fdf9] border-2 border-white rounded-3xl p-8 w-full max-w-xs text-center
                       hover:border-[#007F73] hover:scale-105 transition-transform duration-300"
          >
            <div className="text-6xl text-[#007F73] mb-5">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
