// Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './css/skills.css';
import HomeButton from '../components/HomeButton';

const skillCards = [
  {
    label: '// LANGUAGES',
    accent: 'accent-lime',
    title: '開発言語',
    desc: (
      <>
        業務システムのバックエンドからWebフロントまで。<strong>Java・JavaScript・SQL</strong>を軸に、
        レガシーな<strong>COBOL</strong>バッチの保守まで対応します。
      </>
    ),
    tags: ['Java', 'JavaScript', 'SQL', 'COBOL', 'HTML', 'CSS'],
  },
  {
    label: '// FRAMEWORKS & TOOLS',
    accent: 'accent-red',
    title: 'フレームワーク・ツール',
    desc: (
      <>
        本サイトも<strong>React</strong>で構築。Gitでのチーム開発、
        <strong>GitHub Actions</strong>によるCI/CDまで一通り扱います。
      </>
    ),
    tags: ['React', 'Git', 'GitHub', 'GitHub Actions'],
  },
  {
    label: '// ENGINEERING PROCESS',
    accent: 'accent-lime',
    title: '開発工程',
    wide: true,
    sticker: 'FULL CYCLE',
    desc: (
      <>
        要件定義からデプロイ・保守まで<strong>一気通貫</strong>で担当。
        設計書の作成、DB設計・影響調査、試験仕様書の作成から障害対応まで、
        上流・下流を問わず対応できます。
      </>
    ),
    tags: [
      '要件定義',
      '基本・詳細設計',
      'DB設計・調査',
      '製造',
      '単体・結合試験',
      '保守運用・障害対応',
    ],
  },
  {
    label: '// CREATIVE & MARKETING',
    accent: 'accent-red',
    title: 'デザイン・マーケティング',
    wide: true,
    desc: (
      <>
        2014年からECサイト運営会社で<strong>マーケティング・Webデザイン</strong>に従事。
        エンジニア視点だけでなく、運営・集客の視点からも提案できます。
      </>
    ),
    tags: ['Webデザイン', 'ECサイト運営', 'マーケティング'],
  },
];

const Skills = () => {
  return (
    <div className="skills-page">

      <HomeButton />

      <div className="skills-container">
        {/* タイトル */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <p className="skills-label">★ SKILL SET ★</p>
          <h1 className="skills-title">SKILLS</h1>
          <p className="skills-sub">保有スキル一覧</p>
        </motion.div>

        {/* スキルカード */}
        <div className="skills-grid">
          {skillCards.map((card, index) => (
            <motion.section
              key={card.title}
              className={`skill-card ${card.wide ? 'skill-card--wide' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
            >
              {card.sticker && <span className="skill-sticker">{card.sticker}</span>}
              <p className={`skill-card-label ${card.accent}`}>{card.label}</p>
              <h2 className="skill-card-title">{card.title}</h2>
              <p className="skill-card-desc">{card.desc}</p>
              <div className="skill-tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
