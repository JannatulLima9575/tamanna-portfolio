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

export default function Activities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-[#007F73] mb-3">
            Activities
          </h2>
          <div className="w-16 h-0.5 bg-[#007F73] mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Consistent learning, community engagement, and development activity
          </p>
        </motion.div>

        {/* Activities */}
        <div className="space-y-20">
          {activitiesData.map((item, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div
                className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px]
                              rounded-xl overflow-hidden border border-teal-100 shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>

              {/* Content Card */}
              <div
                className="bg-white rounded-xl border border-teal-100
                              p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-semibold text-[#007F73]">
                    {item.title}
                  </h3>
                  <span
                    className="text-sm px-2 py-1 bg-teal-50 text-[#007F73]
                                   rounded border border-teal-100"
                  >
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
                  className="inline-block bg-[#007F73] text-white
                             px-7 py-3 rounded-lg font-semibold
                             hover:bg-[#00665c]
                             transition-colors duration-300"
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
