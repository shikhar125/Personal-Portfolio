import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center animate-on-scroll">
      <motion.h2 
        className="section-title relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-500 rounded-full"></span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="section-subtitle mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;