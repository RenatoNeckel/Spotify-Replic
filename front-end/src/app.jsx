import React from "react";
import Header from "./components/Header"; //import do header que vai ser o cabeçalho
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/main";
import Artists from "./components/pages/artists";
import Artist from "./components/pages/artist";
import Songs from "./components/pages/songs";
import Song from "./components/pages/song";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="artists" element={<Artists />} />
        <Route path="artist/:id" element={<Artist />} />
        <Route path="songs" element={<Songs />} />
        <Route path="song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
