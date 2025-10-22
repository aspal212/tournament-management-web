import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TournamentList from './pages/Tournaments/TournamentList';
import TournamentDetail from './pages/Tournaments/TournamentDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<TournamentList />} />
        <Route path="/tournaments/:id" element={<TournamentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
