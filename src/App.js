import '../src/pages/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';

function App() {
  return (
      <div className="App">
        <header className="App-header"></header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
