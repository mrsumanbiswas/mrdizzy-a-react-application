import { React } from "react";
import "../styles/about.css"

function Body() {
  return (
    <div id="about-main-content">
      <div id="about-body-top">
        <img id="top-body-clouds-1" src={'media/img/clouds.png'} alt="clouds" />
        <img id="top-body-clouds-2" src={'media/img/clouds.png'} alt="clouds" />
        <h1>I'm Suman.</h1>
        <h2>a <span>pro</span>grammer.</h2>
        <img id="top-body-view" src={'media/img/mountain.png'} alt="mountain image" />
        <hr /><hr />
      </div>
      <div id="about-body-middle">
        <center>
          <img id="profile-photo" src={'media/img/my_img.png'} alt="mr suman biswas" />
          <h2>Hey there..</h2>
          <p>I am a tech enthusiast,<br /> I like to explore new tech and try to<br /> code and decode real-world problems with programming.</p>
        </center>
        <hr /><hr />
      </div>
      <div id="about-body-bottom">
        <img id="code-desk-img" src="media/lang/coding-desk.jpg" alt="code" />
        <h2>My Pursuit</h2>
        <div></div>
        <ul id="skills">
          <li id="skill-1">
            <h3>Automation</h3>
            <p>I often use coding to automate repetitive tasks. Mostly I use Python for Automation.</p>
            <img id="img-1" src="media/lang/python.png" alt="python" />
            <img id="img-2" src="media/lang/js.png" alt="js" />
          </li>
          <li id="skill-2">
            <h3>Design &amp; Development</h3>
            <p>I love designing and creating websites;
              And of course I love photography.</p>
            <img id="img-4" src="media/lang/c++.png" alt="c++" />
            <img id="img-6" src="media/lang/nodejs.png" alt="nodejs" />
            <img id="img-5" src="media/lang/html-5.png" alt="HTML5" />
            <img id="img-3" src="media/lang/css.png" alt="CSS3" />
          </li>
          <li id="skill-3">
            <img id="img-7" src="media/lang/mysql.png" alt="SQL" />
            <img id="img-8" src="media/lang/node-js.png" alt="node-js" />
            <img id="img-9" src="media/lang/code.png" alt="code" />
            <img id="img-10" src="media/lang/code-cup.png" alt="code-cup" />
            <h3>Fun with coding</h3>
            <p>I often start coding with excitement and create a new project.</p>
          </li>
        </ul>
        <hr /><hr /> 
        <img id="sun-img-1" src="media/vector/sun.png" alt="sun" />
        <img id="sun-img-2" src="media/vector/sun.png" alt="sun" />
        <img id="sun-img-3" src="media/vector/sun.png" alt="sun" />
        <img id="sun-img-4" src="media/vector/sun.png" alt="sun" />
      </div>
    </div>
  );
}

export default Body;
