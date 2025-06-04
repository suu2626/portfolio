// ver____ProfileBlock.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: 'spring' },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? 100 : -100,
    transition: { duration: 0.8 },
  }),
};

const ProfileBlock = ({ title, content, direction = 'left' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      custom={direction}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="profile-block"
      style={{
        margin: '50px 0',
        padding: '20px',
        background: '#f0f0f0',
        borderRadius: '12px',
        width: '80%',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </motion.div>
  );
};

export default ProfileBlock;
