import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfessorsPage from "./components/services/pages/ProfessorsPage";
import RicercatoriPage from "./components/services/pages/RicercatoriPage";
import OrdinariPage from "./components/services/pages/OrdinariPage";
import AssociatiPage from "./components/services/pages/AssociatiPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/professori">Professori</Link></li>
            <li><Link to="/ricercatori">Ricercatori</Link></li>
            <li><Link to="/ordinari">Ordinari</Link></li>
            <li><Link to="/associati">Associati</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/professori" element={<ProfessorsPage />} />
          <Route path="/ricercatori" element={<RicercatoriPage />} />
          <Route path="/ordinari" element={<OrdinariPage />} />
          <Route path="/associati" element={<AssociatiPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;