import { motion } from 'framer-motion';

type MotProps = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

const MotionWrapper = ({ children }: MotProps) => (
  <motion.div
    initial='hidden'
    animate='enter'
    exit='exit'
    variants={variants}
    transition={{ type: 'linear' }}
    className='transition-page'
  >
    {children}
  </motion.div>
);

export default MotionWrapper;
