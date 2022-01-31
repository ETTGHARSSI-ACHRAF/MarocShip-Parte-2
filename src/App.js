import "./App.css";
import { Managers } from "./pages/Managers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chauffeurs } from "./pages/Chauffeurs";
import { Responsables } from "./pages/Responsables";
import Vehicules from "./pages/Vehicules";
import DashbordManager from "./pages/DashbordManager";
import { useCookies } from "react-cookie";
import Login from "./pages/Login";
import { Dashbord } from "./components/Dashbord";
import DashbordAdmin from "./pages/DashbordAdmin";

function App() {
  const [cookies, setCookie] = useCookies();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="loginManager" element={<Login role="Manager" />}></Route>
          <Route path="loginAdmin" element={<Login role="Admin" />}></Route>
          <Route
            path="loginChauffeur"
            element={<Login role="Chauffeur" />}
          ></Route>
          <Route
            path="loginResponsable"
            element={<Login role="Responsable" />}
          ></Route>
        </Routes>
      </Router>
      {cookies.role === "manager" && (
        <Router>
          <Dashbord role='manager'/>
          <Routes>
              <Route path="chauffeur" element={<Chauffeurs />}></Route>
              <Route path="manager" element={<DashbordManager />}></Route>
              <Route path="responsable" element={<Responsables />}></Route>
              <Route path="Vehicule" element={<Vehicules />}></Route>
          </Routes>
        </Router>
      )}
      {cookies.role === "admin" && (
        <Router>
          <Dashbord role='admin'/>
          <Routes>
            <Route path="admin" element={<DashbordAdmin/>}></Route>
              <Route path="managers" element={<Managers/>}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
