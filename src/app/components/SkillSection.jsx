// AnimatedSkills.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript',
  'React.js',
  'Firebase',
  'Tailwind',
  'HTML5',
  'CSS',
  'Node.js',
  'Chrome Dev Tools',
  'DaisyUI',
  'Express.js',
  'MongoDB',
  'JWT',
  'Axios',
  'React Query',
  'Git & GitHub',
  'npm',
  'VS Code',
  'Netlify',
  'Vercel',
  'Hardworking',
  'Collaborative mindset',
  'Communication',
];

const AnimatedSkills = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Skills & Expertise
        </h2>

        <motion.div
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
          animate={{ x: [0, -1000, 0] }} // Smooth horizontal loop
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-medium shadow-lg"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSkills;
