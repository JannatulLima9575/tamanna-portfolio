'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const activitiesData = [
  {
    title: 'GitHub Activity',
    badge: 'Open Source',
    points: [
      '988+ contributions in 2025',
      'Top 5% global contributor',
      '24-day longest coding streak',
      'Primary language: JavaScript',
    ],
    link: 'https://github.com/developerTamanna',
    linkText: 'View GitHub',
    image: '/githubwarapped.png',
  },
  {
    title: 'LinkedIn Engagement',
    badge: 'Professional',
    points: [
      'Sharing projects & learning journey',
      'Engaging with developer community',
      'Focused on Web Development & CSE',
      'Building professional network',
    ],
    link: 'https://www.linkedin.com/in/tamanna-akter57/',
    linkText: 'View LinkedIn',
    image: '/linkdnwrpd.png',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Activities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-[#007F73] mb-3">
            Activities
          </h2>
          <div className="w-16 h-[2px] bg-[#007F73] mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Consistent learning, community engagement, and development activity
          </p>
        </motion.div>

        {/* Activities */}
        <div className="space-y-24">
          {activitiesData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`relative w-full h-[260px] sm:h-[320px] lg:h-[360px]
                rounded-2xl overflow-hidden border border-teal-100 shadow-sm
                ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div
                className={`bg-white rounded-2xl border border-teal-100 p-8
                shadow-sm hover:shadow-md transition-all duration-300
                ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-semibold text-[#007F73]">
                    {item.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-teal-50 text-[#007F73] rounded-full border border-teal-100">
                    {item.badge}
                  </span>
                </div>

                <ul className="list-disc list-inside text-gray-700 text-sm space-y-3 mb-8">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.linkText}
                  className="inline-flex items-center justify-center
                             bg-[#007F73] text-white px-8 py-3 rounded-lg
                             font-semibold hover:bg-[#00665c]
                             transition-all duration-300 hover:scale-[1.03]"
                >
                  {item.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}