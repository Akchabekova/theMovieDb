import './App.css';
import React from 'react';
import {BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PopularFilms from "./pages/PopularFilms/PopularFilms";
import FilmInfo from "./pages/FilmInfo";
import Person from "./pages/Person";
import PersonCompound from "./pages/PersonCompound";
import PersonInfo from "./pages/PersonInfo";

const App = () => {
  return (
      <BrowserRouter>
          < Header />
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/popularfilms" element={<PopularFilms />}/>
              <Route path="/movie/:id" element={<FilmInfo />}/>
              <Route path="/movie/:id/cast" element={<PersonCompound/>}/>
              <Route path="/person/:id" element={<PersonInfo/>}/>
          </Routes>
         < Footer />
      </BrowserRouter>

  );
};

export default App;