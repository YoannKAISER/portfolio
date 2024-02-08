import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './Pages/Accueil';
import MesCompétences from './Pages/Mes compétences';
import MesProjets from './Pages/Mes projets';


function App() {
  return (
    <main className="App">
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/Mes compétences' element={<MesCompétences />} />
      <Route path='/Mes projets' element={<MesProjets />} />
    </Routes>
    
    </main>
  );
};

export default App;
