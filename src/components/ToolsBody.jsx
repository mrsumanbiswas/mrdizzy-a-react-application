import { React } from "react";
import { Link } from "react-router-dom";

import "../styles/tools.css"

function Body() {
  return (
    <div id="tool-body">
      <div id="tools">
        <Link id="tool-item" to={'/youtube'} >
          <h2>YT AD free</h2>
          <img src={"media/img/youtube.jpg"} alt="youtube" />
          <p>Watch <strong>AD free</strong> YouTube content</p>
        </Link>
      </div>
    </div>
  );
}


export default Body;