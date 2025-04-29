import { motion } from 'framer-motion';
import SocialLinks from './common/SocialLinks';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-12 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <motion.span 
            className="text-lg font-medium px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Frontend Developer
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Creating Engaging <span className="text-primary-500">Digital Experiences</span> 
          </motion.h1>
          
          <motion.p 
            className="text-lg text-dark-600 dark:text-dark-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
           A passionate and motivated frontend developer with hands-on experience in building responsive and dynamic web applications using HTML, CSS, JavaScript, and React.js. Eager to learn and contribute to innovative projects, with a focus on delivering user-friendly and visually appealing interfaces. Familiar with modern development tools like Git, TailwindCSS.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 filter blur-3xl opacity-20 absolute"></div>
          <img src="/ShikharImage.png"
           alt="Shikhar Upadhyay" 
           className="w-full max-w-md rounded-2xl shadow-xl z-10 animate-float"
           />
          

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;