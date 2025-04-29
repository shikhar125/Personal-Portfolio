import { motion } from 'framer-motion';
import SectionTitle from './common/SectionTitle';
import { FiCode, FiLayout, FiSmartphone, FiUsers } from 'react-icons/fi';

const features = [
  {
    icon: <FiCode className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'Writing clean, maintainable, and efficient code that follows best practices.'
  },
  {
    icon: <FiLayout className="w-6 h-6" />,
    title: 'Responsive Design',
    description: 'Creating responsive layouts that work beautifully across all devices and screen sizes.'
  },
  {
    icon: <FiSmartphone className="w-6 h-6" />,
    title: 'Modern Technologies',
    description: 'Using the latest technologies and frameworks to build modern web applications.'
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'User-Centric',
    description: 'Focusing on user experience to create intuitive and accessible interfaces.'
  }
];

const About = () => {
  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-900">
      <SectionTitle 
        title="About Me" 
        subtitle="Passionate frontend developer with a strong foundation in creating responsive and interactive web applications."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="animate-on-scroll"
        >
          <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">Who I Am</h3>
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            I'm a frontend developer with a passion for creating beautiful, functional, and user-friendly websites. My journey in web development began during my college years, where I discovered my love for turning designs into interactive experiences.
          </p>
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            As a fresher in the industry, I bring fresh perspectives, eagerness to learn, and a solid foundation in frontend technologies. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
          </p>
          <p className="text-dark-600 dark:text-dark-300">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or experimenting with new frontend frameworks and libraries.
          </p>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-3 text-dark-900 dark:text-white">Education</h4>
            <div className="card p-5 mb-4">
              <h5 className="font-medium text-dark-900 dark:text-white">BBA(Computer Application)</h5>
              <p className="text-dark-500 dark:text-dark-400">Savitribai Phule Phune University | 2021 - 2024</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card hover:shadow-md dark:hover:bg-dark-700 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">{feature.title}</h3>
              <p className="text-dark-600 dark:text-dark-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;