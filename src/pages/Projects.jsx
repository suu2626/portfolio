// Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/projects.css';
import HomeButton from '../components/HomeButton';

const projects = [
  {
    id: 4,
    title: 'メディア運営サイト開発',
    detail: [
      'PHPを用いたメディアサイトの開発・運営を担当。DBはMySQLを使用。','取材記事をはじめとするコンテンツの管理機能を実装し、記事の登録・更新・公開までの運用を整備。','顧客データの分析結果をもとにページ構成や導線を改善し、サイトの最適化を継続的に実施。',
    ]
  },
  {
    id: 1,
    title: '設備管理・基幹システムの保守運用',
    detail: [
      '要件定義からデプロイまで一貫して担当。顧客ヒアリングに基づく設計・開発・テスト・保守を担当。Java（バックエンド）・JavaScript（フロントエンド）・COBOL（バッチ処理）を使用。既存コードへの影響を最小限に抑えた機能追加・改善を実施し、業務効率の向上を実現。ソースコード解析とDB調査による問い合わせ対応、業務マニュアルの作成・修正も担当。',
    ]
  },
  {
    id: 2,
    title: '大学の通信教育システムの改修',
    detail: [
      '基本設計から保守まで一貫して担当。要件書をもとに基本設計書・詳細設計書を作成し、DB設計・クエリ作成・影響調査を実施。既存システムへの機能追加を中心に製造を担当し、単体試験・結合試験の仕様書作成から障害対応まで対応。', 'リリース後の保守対応も担当。',
    ]
  },
  {
    id: 3,
    title: 'アパレル系ECサイトの運営と開発',
    detail: [
      '顧客との要件打ち合わせから実装・テストまでを担当。','基幹システムとのデータ連携機能、およびトップ・商品・カテゴリ・カート・マイページの各ページを実装。','検証環境での結合テスト、複数人による総合テストを実施し品質を担保。',
    ]
  },
  {
    id: 5,
    title: '【個人開発】ポートフォリオサイト（本サイト）',
    detail: [
      'React（Create React App）で構築し、GitHub ActionsによりmainへのpushでGitHub Pagesへ自動デプロイ。','アニメーションはframer-motion、ルーティングはreact-router-domを使用。テストの整備やCIの保守も自ら実施。','開発はAIエージェント（Claude Code）と協働し、Codexによるコードレビューを経てから公開する流れで運用。',
      <a key="repo" href="https://github.com/suu2626/portfolio" target="_blank" rel="noopener noreferrer">ソースコード（GitHub）</a>,
    ]
  },
];

const ProjectItem = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="project-item"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
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
                {Array.isArray(project.detail)
                  ? project.detail.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < project.detail.length - 1 && <br />}
                    </React.Fragment>
                  ))
                  : project.detail
                }
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

      <HomeButton />

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
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
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
