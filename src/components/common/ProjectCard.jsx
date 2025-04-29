import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiInfo } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="card overflow-hidden group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-lg mb-5 aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex space-x-3">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View GitHub Repository"
              >
                <FiGithub />
              </motion.a>
            )}
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View Live Demo"
              >
                <FiExternalLink />
              </motion.a>
            )}
            <motion.button
              onClick={() => setShowDetails(!showDetails)}
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View Project Details"
            >
              <FiInfo />
            </motion.button>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">{project.title}</h3>
      <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="text-xs px-2 py-1 rounded-md bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Details Modal */}
      {showDetails && (
        <motion.div
          className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowDetails(false)}
        >
          <motion.div
            className="card-glass max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white">{project.title}</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-dark-500 hover:text-dark-700 dark:text-dark-400 dark:hover:text-white"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-4 object-cover"
            />

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">Description</h4>
              <p className="text-dark-600 dark:text-dark-300">{project.fullDescription || project.description}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-sm px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.features && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-dark-900 dark:text-white">Key Features</h4>
                <ul className="list-disc pl-5 text-dark-600 dark:text-dark-300 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex space-x-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-sm"
                >
                  <FiGithub className="mr-2" /> GitHub Repository
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm"
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;