import React from "react";
import { Link } from "react-router-dom";
import './Page404.scss'

const Page404 = () => {
  return (
    <div className="error">
      <h1> 404 </h1>
      <p>Oups! La page que vous demande n'existe pas.</p>
      <Link className="LinkRouter" to="/"> Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default Page404;
