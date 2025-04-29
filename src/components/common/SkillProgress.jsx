import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SkillProgress = ({ name, percentage, color = "primary", index = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, delay: index * 0.1 }
      });
    }
  }, [controls, inView, percentage, index]);

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-base font-medium text-dark-900 dark:text-white">{name}</h3>
        <span className="text-sm font-medium text-dark-600 dark:text-dark-400">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={controls}
          className={`h-full rounded-full bg-${color}-500`}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillProgress;