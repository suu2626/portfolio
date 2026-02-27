// ProfileBlock.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -120 : 120,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 6.8, // ← 表示スピード（秒）。小さいほど速い
      type: 'spring',
      bounce: 0.3 // ← バウンド量。0で弾まない、1で大きく弾む
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? 100 : -100,
    transition: {
      duration: 0.2 // ← 非表示スピード（秒）
    },
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
      className={`profile-block ${direction === 'left' ? 'block-left' : 'block-right'}`}
      style={{
        margin: '24px auto',
        padding: '28px 36px',
        width: '85%',
        maxWidth: '560px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',

        // グラスモーフィズム
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',

        // テキスト
        color: '#ffffff',
        fontFamily: `'Noto Sans JP', 'Helvetica Neue', sans-serif`,
      }}
    >
      {/* ラベル */}
      <p style={{
        fontSize: '0.72em',
        fontWeight: '600',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(255, 255, 255, 0.6)',
        margin: '0 0 8px 0',
      }}>
        {title}
      </p>

      {/* コンテンツ */}
      <p style={{
        fontSize: '0.9em',
        fontWeight: '400',
        lineHeight: '1.7',
        margin: 0,
        color: 'rgba(255, 255, 255, 0.95)',
      }}>
        {Array.isArray(content)
          ? content.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < content.length - 1 && <br />}
            </React.Fragment>
          ))
          : content
        }
      </p>
    </motion.div>
  );
};

export default ProfileBlock;