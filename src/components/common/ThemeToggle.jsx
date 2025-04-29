import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 p-2 rounded-full bg-white dark:bg-dark-800 shadow-md"
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FiSun className="text-yellow-400 w-5 h-5" />
      ) : (
        <FiMoon className="text-primary-700 w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;