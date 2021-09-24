
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Header from "./components/Header"
import Inicio from "../src/Layout/Inicio"
import Inscripciones from "../src/Layout/Inscripciones";
import Acercade from "../src/Layout/Acercade";
import Galeria from "../src/Layout/Galeria";
import Novedades from "../src/Layout/Novedades";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        
        <Switch>
          <Route path="/Inscripciones.js">
            <Inscripciones></Inscripciones>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Acercade.js">
            <Acercade></Acercade>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Galeria.js">
            <Galeria></Galeria>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Novedades.js">
            <Novedades></Novedades>
          </Route>
        </Switch>
        
        <Switch>
          <Route exact path="/">
            <Inicio></Inicio>
          </Route>
        </Switch>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
