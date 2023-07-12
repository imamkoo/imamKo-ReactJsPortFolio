import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Qualification from "./components/Qualification/Qualification";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Service from "./components/Services/Service";
import Skill from "./components/Skills/Skill";
import Header from "./components/header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skill />
      <Service />
      <Qualification />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
  </React.StrictMode>
);
