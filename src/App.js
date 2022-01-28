import './App.css';
import { Managers } from './pages/Managers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chauffeurs } from './pages/Chauffeurs';
import { Responsables } from './pages/Responsables';
import { LoginManager } from './pages/LoginManager';
import Vehicules from './pages/Vehicules';
import DashbordManager from './pages/DashbordManager';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="manager" element={<DashbordManager />}></Route>
      <Route path="chauffeur" element={<Chauffeurs />}></Route>
      <Route path="responsable" element={<Responsables />}></Route>
      <Route path="loginManager" element={<LoginManager />}></Route>
      <Route path="Vehicule" element={<Vehicules />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
