import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Authentification from './components/Authentification';
import Historique from './components/Historique';
import Chambres from './components/Chambres';
import Reservation from './components/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/historique/:idClient" element={<Historique />} />
        <Route path="/chambres/:idClient" element={<Chambres />} />
        <Route path="/reservation/:idClient/:idChambre" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;