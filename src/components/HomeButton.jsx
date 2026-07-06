// HomeButton.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 2秒後に表示
    const timer = setTimeout(() => setVisible(true), 2000);

    // 画面最下部までスクロールしたら表示
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) setVisible(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      to="/"
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 18px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '50px',
        color: 'rgba(255, 255, 255, 0.9)',
        textDecoration: 'none',
        fontSize: '0.82em',
        fontWeight: '500',
        letterSpacing: '0.05em',
        fontFamily: "'Helvetica Neue', sans-serif",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.6s ease, background 0.3s, border-color 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      }}
    >
      ← Home
    </Link>
  );
};

export default HomeButton;