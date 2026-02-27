import React from 'react';
import ProfileBlock from '../components/ProfileBlock';
import bgImage from './images/lrc_20231229_30-102.jpg';
import './css/profile.css';
import HomeButton from '../components/HomeButton';

const blocks = [
  { title: '名前', content: '鈴木 真也（スズキ シンヤ）', direction: 'left' },
  { title: '出身地', content: '和歌山県、白浜町。', direction: 'right' },
  { title: '居住地', content: '大阪府', direction: 'left' },
  {
    title: '経歴',
    content: [
      '2014年からECサイト運営会社にて、マーケティング・Webデザインに従事',
      '2022年よりエンジニアとして案件に参画'
    ],
    direction: 'right'
  },
  { title: '趣味', content: '音楽、漫画、映画、写真', direction: 'left' },
  { title: '好きな言語', content: 'Java、JavaScript、SQL', direction: 'right' },
];

const Profile = () => (
  <div style={{
    padding: '40px 0',
    overflowX: 'hidden',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100svh',
  }}>

    <HomeButton />

    <div style={{
      textAlign: 'center',
      marginBottom: '40px',
    }}>
      <p style={{
        fontSize: '0.72em',
        fontWeight: '700',
        letterSpacing: '0.3em',
        color: 'rgba(255, 255, 255, 0.7)',
        margin: '0 0 12px 0',
        fontFamily: "'Helvetica Neue', sans-serif",
      }}>
        ABOUT ME
      </p>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 8vw, 4rem)',
        fontWeight: '800',
        margin: '0 0 24px 0',
        letterSpacing: '-0.02em',
        fontFamily: "'Helvetica Neue', sans-serif",
        background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Profile
      </h1>
      <div style={{
        width: '60px',
        height: '2px',
        background: 'linear-gradient(90deg, #4f46e5, #0ea5e9)',
        margin: '0 auto',
        borderRadius: '2px',
      }} />
    </div>

    {blocks.map((block, index) => (
      <ProfileBlock
        key={index}
        title={block.title}
        content={block.content}
        direction={block.direction}
      />
    ))}
  </div>
);

export default Profile;
