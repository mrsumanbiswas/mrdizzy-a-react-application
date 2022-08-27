import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./pages"
import About from "./pages/about"
import Tools from "./pages/tools"
import Youtube from "./pages/Youtube";
import PNF from "./pages/notfoundpage"




function Redirect(){
    function redir(){
        location.replace('/404')
    }
    return(
        <div onLoad={redir()}>
            <center>
                <h1>Page you looking for is not found...</h1>
            </center>
        </div>
    )
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/youtube" element={<Youtube />} />
                <Route path="/" element={<Home />} />
                <Route path="/404" element={<PNF />} />
                <Route path="*" element={<Redirect />} />
            </Routes>
        </Router>
    );
}
 