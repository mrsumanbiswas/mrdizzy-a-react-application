import React from "react";

import "../styles/404.css"

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function PNF() {
    return (
      <div id="div-body">
        <Header />
        <div id="PNF">
          <img src={'media/img/404.jpg'} alt="404" />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default PNF;