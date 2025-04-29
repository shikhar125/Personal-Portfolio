import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/shikhar125',
    icon: <FiGithub size={20} />,
    color: 'hover:text-gray-700 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shikhar-upadhyay-a25793294',
    icon: <FiLinkedin size={20} />,
    color: 'hover:text-blue-600',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300 } },
};

const SocialLinks = ({ className = '' }) => {
  return (
    <motion.div
      className={`flex space-x-5 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`w-10 h-10 rounded-full bg-white dark:bg-dark-800 shadow-soft flex items-center justify-center text-dark-600 dark:text-dark-300 transition-all duration-300 ${social.color} hover:-translate-y-1 hover:shadow-md`}
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;