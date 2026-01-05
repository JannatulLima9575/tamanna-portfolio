'use client';
import { motion } from 'framer-motion';

const skillsByCategory = [
  {
    category: 'Expertise',
    skills: ['JavaScript', 'React.js', 'Firebase', 'Tailwind', 'HTML5', 'CSS'],
    proficiency: 'Advanced',
  },
  {
    category: 'Comfortable',
    skills: ['Node.js', 'Chrome DevTools', 'DaisyUI'],
    proficiency: 'Proficient',
  },
  {
    category: 'Familiar',
    skills: ['Express.js', 'MongoDB', 'JWT', 'Axios', 'React Query'],
    proficiency: 'Intermediate',
  },
  {
    category: 'Tools',
    skills: ['Git & GitHub', 'npm', 'VS Code', 'Netlify', 'Vercel'],
    proficiency: 'Tools',
  },
  {
    category: 'Soft Skills',
    skills: ['Hardworking', 'Collaborative mindset', 'Communication'],
    proficiency: 'Professional',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export default function AnimatedSkills() {
  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills & <span className="text-[#007F73]">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-[#007F73] mx-auto mt-4 rounded"></div>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            A snapshot of my technical strengths and professional capabilities
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsByCategory.slice(0, 4).map((category, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-gray-200
                         hover:border-[#007F73] transition shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.category}
                </h3>
                <span className="text-xs font-medium px-3 py-1 rounded-full
                                 bg-teal-50 text-[#007F73] border border-teal-200">
                  {category.proficiency}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-lg
                               bg-teal-50 text-[#007F73] border border-teal-200
                               hover:bg-[#007F73] hover:text-white transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bars */}
        <motion.div
          className="mt-20 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Technical Proficiency
          </h3>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { skill: 'Frontend Development', level: 90, tech: 'React, JS, HTML, CSS' },
              { skill: 'Backend Development', level: 75, tech: 'Node.js, Express' },
              { skill: 'Database & Auth', level: 70, tech: 'MongoDB, Firebase' },
              { skill: 'Tools & Deployment', level: 85, tech: 'Git, Vercel, Netlify' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">{item.skill}</span>
                  <span className="text-sm font-semibold text-[#007F73]">
                    {item.level}%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{item.tech}</p>
                <div className="h-2 bg-teal-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#007F73]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.4, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="mt-20 bg-teal-50 rounded-2xl p-8 border border-teal-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Professional Attributes
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsByCategory[4].skills.map((skill, i) => (
              <motion.div
                key={i}
                className="px-5 py-3 bg-white rounded-xl border border-teal-200
                           text-[#007F73] font-medium shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}