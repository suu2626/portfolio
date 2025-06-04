// ver____Profile.jsx
import React from 'react';
import ProfileBlock from '../components/ProfileBlock';

const blocks = [
  { title: '名前', content: '鈴木 真也（スズキ シンヤ）', direction: 'left' },
  { title: '出身地', content: '和歌山県出身、大阪府在住。', direction: 'right' },
  { title: '趣味', content: '音楽、漫画、映画、写真', direction: 'left' },
  { title: '好きな言語', content: 'Java と JavaScript、たまにPython', direction: 'right' },
];

const Profile = () => (
  <div style={{ padding: '40px 0' }}>
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
