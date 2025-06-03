// ver____App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>ポートフォリオサイト</h1>
          <nav>
            <Link to="/" style={{ color: '#61dafb', margin: '0 10px' }}>
              ホーム
            </Link>
            <Link to="/profile" style={{ color: '#61dafb', margin: '0 10px' }}>
              プロフィール
            </Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
