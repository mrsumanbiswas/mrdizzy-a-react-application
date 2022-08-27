import React from "react";


import "../styles/leftSidebar.css";
import "../styles/body.css";
import "../styles/rightSidebar.css"

import Header from "../components/Header.jsx";
import LeftBar from "../components/LeftBar.jsx";
import Body from "../components/Body.jsx";
import RightBar from "../components/RightBar.jsx";
import Footer from "../components/Footer.jsx";


function Home() {
  return (
    <div id="div-body">
      <Header />
      <main id="main">
        <LeftBar />
        <Body />
        <RightBar />
        <hr />
      </main>
      <Footer />
    </div>
  );
}

export default Home;



