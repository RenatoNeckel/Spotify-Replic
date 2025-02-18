import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png"; //para importar uma img em react utilizar o import e depois passar o nome utilizado para a imag entre {}
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do spotify" />
      </Link>

      <Link to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
