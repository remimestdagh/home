import React, { Fragment } from "react";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills"

const App = () =>  (
  <Fragment>
    <MainBody />
    <AboutMe />
    <Skills />
    <Project />
    <Footer />
  </Fragment>
);
  


export default App;
