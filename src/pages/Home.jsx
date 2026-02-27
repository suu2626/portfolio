// ver____Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
    
const Home = () => {
  return (
    <div className="home-body" style={{ 
      backgroundColor: 'black',
      color: 'lime',
      minHeight: '100svh',
      fontFamily: "'MS Gothic', monospace",
      textAlign: 'center',
      }}>
      <div className="marquee">
        <h1 className="scroll-text">★Welcome to Shinya Suzuki's portfolio site！ ★</h1>
      </div>

      <p>
        あなたは{' '}
        <a
          href="https://www.freecounterstat.com"
          title="hit counters"
          className="external-link"
        >
          <img
            src="https://counter1.optistats.ovh/private/freecounterstat.php?c=1plh6b8btuadqgsmesj6nje7tkn2blxm"
            border="0"
            title="hit counters"
            alt="hit counters"
          />
        </a>{' '}
        人目のお客様です！
      </p>

      <p>最終更新日 YYYY/MM/DD</p>

      <div className="menu">★ メニュー ★</div>
      <ul className="menu-list">
        <li><Link to="/profile">・プロフィール</Link> → 簡単な自己紹介です</li>
        <li><Link to="/projects">・プロジェクト</Link> → 過去参画案件</li>
        <li><a href="#" className="external-link">・スキル</a> → 保有スキル一覧</li>
        <li><a href="#" className="external-link">・お問合せ</a> → お気軽にお問い合わせください</li>
      </ul>

      <div className="update-log">
        <div>★ 更新履歴 ★</div>
        <table align="center" border="1" cellPadding="5">
          <tbody>
            <tr>
              <td>YYYY/MM/DD</td>
              <td>********** <span className="blink">☆New</span></td>
            </tr>
            <tr>
              <td>YYYY/MM/DD</td>
              <td>**********</td>
            </tr>
            <tr>
              <td>YYYY/MM/DD</td>
              <td>**********</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="footer-text">
        © 2025 Shinya Suzuki All rights reserved.<br />
        推奨ブラウザ：Internet Explorer 6.0以上<br />
        推奨画面サイズ：800×600（笑）
      </p>
    </div>
  );
};

export default Home;
