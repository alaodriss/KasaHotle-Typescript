import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Aprops from "./pages/Aprops/Aprops";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="apropos" element={<Aprops />} />
          {/* <Route path="logement/:logementId" exact element={<Logement />} />
          <Route path="*" element={<Erreur />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
