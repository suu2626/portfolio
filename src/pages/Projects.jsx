// Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/projects.css';

const projects = [
  {
    id: 1,
    title: 'プロジェクト案件名 A',
  },
  {
    id: 2,
    title: 'プロジェクト案件名 B',
  },
  {
    id: 3,
    title: 'プロジェクト案件名 C',
  },
];

const ProjectItem = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="project-item"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
    >
      {/* ヘッダー（クリックでトグル） */}
      <button
        className={`project-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="project-index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="project-title">{project.title}</span>
        <motion.span
          className="project-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>

      {/* 詳細（アコーディオン） */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="project-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="project-detail-inner">
              <p className="project-detail-placeholder">
                案件の詳細をここに記載してください。
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="projects-page">
      {/* 背景装飾 */}
      <div className="projects-bg">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
      </div>

      <div className="projects-container">
        {/* タイトル */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="projects-label">WORKS</p>
          <h1 className="projects-title">Projects</h1>
          <div className="projects-divider" />
        </motion.div>

        {/* プロジェクトリスト */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
