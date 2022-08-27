import React from "react";

import "../styles/youtube.css"

import Header from "../components/Header.jsx";
import Body from "../components/YoutubeBody";
import Footer from "../components/Footer.jsx";


function Youtube() {
    return (
        <div id="yt-root">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default Youtube;