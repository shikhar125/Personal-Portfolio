import { motion } from 'framer-motion';
import SocialLinks from './common/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-white dark:bg-dark-950 border-t border-dark-100 dark:border-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <a href="#home" className="text-2xl font-bold text-primary-500 flex items-center">
              <span className="mr-2">{"</>"}</span>
              <span>ShikharPortfolio</span>
            </a>
            <p className="mt-2 text-dark-600 dark:text-dark-400 max-w-md">
              Building innovative web experiences with clean code and modern design.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <SocialLinks className="mb-4" />
            <p className="text-dark-500 dark:text-dark-400 text-sm">
              &copy; {currentYear} DevPortfolio. All rights reserved.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-dark-100 dark:border-dark-800 flex flex-wrap justify-center md:justify-between gap-4 text-sm text-dark-500 dark:text-dark-400"
        >
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-primary-500 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary-500 transition-colors duration-300">Cookie Policy</a>
          </div>
          <p>Designed and built with ❤️ using React and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;