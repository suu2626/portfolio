// ver____App.js
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>ポートフォリオサイト</h1>
          <nav>
            <Link to="/">ホーム</Link>
            <Link to="/profile">プロフィール</Link>
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
