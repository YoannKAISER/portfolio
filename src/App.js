import './App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from './Pages/Accueil';
import APropos from './Pages/A propos';
import MesCompétences from './Pages/Mes compétences';
import MesProjets from './Pages/Mes projets';
import Contact from './Pages/Contact';


function App() {
  return (
    <main className="App">
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/APropos' element={<APropos />} />
      <Route path='/Mes compétences' element={<MesCompétences />} />
      <Route path='/Mes projets' element={<MesProjets />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    
    </main>
  );
};

export default App;
