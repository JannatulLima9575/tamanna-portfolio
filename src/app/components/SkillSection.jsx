// AnimatedSkills.jsx
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
    skills: ['Node.js', 'Chrome Dev Tools', 'DaisyUI'],
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

const AnimatedSkills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-3">
            Skills & Expertise
          </h2>
          <div className="w-16 h-0.5 bg-[#007F73] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">
            Comprehensive technical skills and professional capabilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsByCategory.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white rounded-lg p-6 border border-teal-100 hover:border-teal-200 transition-colors duration-300 shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-teal-700">
                  {category.category}
                </h3>
                <span className="text-sm text-[#007F73] bg-teal-50 px-2 py-1 rounded border border-teal-100">
                  {category.proficiency}
                </span>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-teal-50 text-teal-700 text-sm font-medium rounded border border-teal-200 hover:bg-[#007F73] hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills Progress */}
        <motion.div
          className="bg-white rounded-lg p-8 border border-teal-100 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-teal-700 mb-8 text-center">
            Technical Proficiency
          </h3>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                skill: 'Frontend Development',
                level: 90,
                category: 'React, JavaScript, HTML5, CSS',
              },
              {
                skill: 'Backend Development',
                level: 75,
                category: 'Node.js, Express.js',
              },
              {
                skill: 'Database Management',
                level: 70,
                category: 'MongoDB, Firebase',
              },
              {
                skill: 'Tools & Deployment',
                level: 85,
                category: 'Git, VS Code, Netlify, Vercel',
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-teal-700">
                      {item.skill}
                    </span>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#007F73]">
                    {item.level}%
                  </span>
                </div>
                <div className="h-2 bg-teal-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#007F73] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          className="mt-12 bg-teal-50 rounded-lg p-8 border border-teal-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-teal-700 mb-6 text-center">
            Professional Attributes
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {skillsByCategory[4].skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 px-4 py-3 bg-white text-teal-700 rounded-lg border border-teal-200 hover:border-[#007F73] transition-colors duration-200 shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-[#007F73] rounded-full"></div>
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">Interested in working together?</p>
          <motion.button
            className="px-8 py-3 bg-[#007F73] text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 border border-[#007F73] shadow-sm"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSkills;
