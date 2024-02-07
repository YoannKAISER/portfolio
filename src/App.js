import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './Pages/Accueil';
import MesProjets from './Pages/Mes projets';
import Contact from './Pages/Contact';

function App() {
  return (
    <main className="App">
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/Mes projets' element={<MesProjets />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    
    </main>
  );
};

export default App;
