import React from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Header, CenteredCont } from "./estilos-componentes/styles-comp";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDetails";

function App() {
  return (
    <div>
      <Header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Página de Búsqueda</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <CenteredCont>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/celulares/:nameCelular" element={<Celulares />}>
            <Route path="details" element={<CelularDetails />} />
          </Route>
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </CenteredCont>
    </div>
  );
}

export default App;