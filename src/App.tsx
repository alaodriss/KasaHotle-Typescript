import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Aprops from "./pages/Aprops/Aprops";
import Footer from "./components/Footer/Footer";
import Page404 from "./pages/Page404/Page404";
import Logement from "./pages/Logement/Logement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="apropos" element={<Aprops />} />
          <Route path="logement/:logementId"  element={<Logement />} />
          <Route path="*" element={<Page404 />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
