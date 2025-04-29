import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const CertificateCard = ({ certificate, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div 
      className="h-[280px] perspective-1000 cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="card h-full flex flex-col justify-between overflow-hidden group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center text-primary-500">
                <FiAward size={20} />
              </div>
              <h3 className="ml-3 text-lg font-bold text-dark-900 dark:text-white">{certificate.title}</h3>
            </div>
            
            <div className="relative flex-grow overflow-hidden rounded-lg mb-4">
              <img 
                src={certificate.image} 
                alt={certificate.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-dark-500 dark:text-dark-400">{certificate.issuer}</p>
              <p className="text-sm text-dark-500 dark:text-dark-400">{certificate.date}</p>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div className="absolute w-full h-full backface-hidden rotateY-180">
          <div className="card h-full flex flex-col justify-between overflow-hidden">
            <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-3">{certificate.title}</h3>
            
            <p className="text-dark-600 dark:text-dark-300 flex-grow">
              {certificate.description}
            </p>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium text-dark-900 dark:text-white mb-2">Skills Gained:</h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {certificate.credentialUrl && (
              <motion.a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ x: 3 }}
              >
                <FiExternalLink className="mr-1" /> View Credential
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateCard;