import React from 'react';
import ProfileBlock from '../components/ProfileBlock';
import bgImage from './images/profile-01.JPG';
import './css/profile.css';

const blocks = [
  { title: '名前', content: '鈴木 真也（スズキ シンヤ）', direction: 'left' },
  { title: '出身地', content: '和歌山県、白浜町。', direction: 'right' },
  { title: '居住地', content: '大阪府', direction: 'left' },
  { title: '経歴', content: '2014年からECサイト運営会社にて、マーケティング・Webデザインに従事', direction: 'right' },
  { title: '趣味', content: '音楽、漫画、映画、写真', direction: 'left' },
  { title: '好きな言語', content: 'Java、JavaScript、SQL', direction: 'right' },
];

const Profile = () => (
  <div style={{ 
    padding: '40px 0',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
    }}
  >
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
