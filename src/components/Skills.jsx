import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import SkillProgress from './common/SkillProgress';
import { FiCode, FiLayers, FiTool } from 'react-icons/fi';

// Skill categories
const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <FiCode />,
    skills: [
      { name: 'HTML5 & CSS3', percentage: 90, color: 'primary' },
      { name: 'JavaScript (ES6+)', percentage: 75, color: 'primary' },
      { name: 'React.js', percentage: 70, color: 'primary' },
      { name: 'Tailwind CSS', percentage: 70, color: 'primary' }
    ]
  },
  {
    id: 'ui',
    title: 'UI/UX & Design',
    icon: <FiLayers />,
    skills: [
      { name: 'Responsive Design', percentage: 90, color: 'secondary' },
      { name: 'Figma', percentage: 75, color: 'secondary' },
      { name: 'CSS Animations', percentage: 80, color: 'secondary' },
      { name: 'UI Prototyping', percentage: 70, color: 'secondary' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    icon: <FiTool />,
    skills: [
      { name: 'Git & GitHub', percentage: 85, color: 'accent' },
      { name: 'Webpack/Vite', percentage: 75, color: 'accent' },
      { name: 'RESTful APIs', percentage: 60, color: 'accent' },
      { name: 'Performance Optimization', percentage: 60, color: 'accent' }
    ]
  }
];

// Technical skills for badge display
const technicalSkills = [
  { name: 'HTML5', color: 'bg-orange-500' },
  { name: 'CSS3', color: 'bg-blue-500' },
  { name: 'JavaScript', color: 'bg-yellow-500' },
  { name: 'React', color: 'bg-cyan-500' },
  { name: 'Tailwind CSS', color: 'bg-teal-500' },
  { name: 'Git', color: 'bg-red-500' },
  { name: 'Responsive Design', color: 'bg-purple-500' },
  { name: 'Figma', color: 'bg-pink-500' },
  { name: 'Vite', color: 'bg-indigo-500' },
  { name: 'REST APIs', color: 'bg-green-500' },
  { name: 'UI/UX', color: 'bg-rose-500' },
  { name: 'npm/yarn', color: 'bg-amber-500' }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <SectionTitle 
        title="Skills & Expertise" 
        subtitle="My technical skills and competencies in frontend development technologies and tools."
      />

      {/* Technical Skill Badges */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-16 animate-on-scroll"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {technicalSkills.map((skill, index) => (
          <motion.span
            key={index}
            className={`${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            {skill.name}
          </motion.span>
        ))}
      </motion.div>

      {/* Skill Categories with Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            className="card hover:shadow-lg transition-shadow duration-300 animate-on-scroll"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-full bg-${category.id === 'frontend' ? 'primary' : category.id === 'ui' ? 'secondary' : 'accent'}-100 dark:bg-${category.id === 'frontend' ? 'primary' : category.id === 'ui' ? 'secondary' : 'accent'}-900/20 flex items-center justify-center text-${category.id === 'frontend' ? 'primary' : category.id === 'ui' ? 'secondary' : 'accent'}-500`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white">{category.title}</h3>
            </div>
            
            <div>
              {category.skills.map((skill, index) => (
                <SkillProgress
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;