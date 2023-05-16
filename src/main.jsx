import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Service from "./components/Services/Service";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Portfolio from "./components/Portfolio/Portfolio";

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
