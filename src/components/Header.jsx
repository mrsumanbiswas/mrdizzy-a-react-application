import { React } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div className="icon">
        <a href="/"><img className="img-icon" id="icon" src="https://yt3.ggpht.com/y29rcaAU7Jr5F606Zkjz0Gcs4KPMYOIWsXTg-KunYXpbdWBo_ZPaKXhkOurm6Mz4F-HWmajP=s88-c-k-c0x00ffffff-no-rj-mo" alt='icon' />
        </a>
        <img className="img-icon" src="https://yt3.ggpht.com/y29rcaAU7Jr5F606Zkjz0Gcs4KPMYOIWsXTg-KunYXpbdWBo_ZPaKXhkOurm6Mz4F-HWmajP=s88-c-k-c0x00ffffff-no-rj-mo" alt='icon' />
        <p>Suman Biswas</p>
      </div>
      <nav id="nav">
        <ul className="nav-item">
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/tools">Tools</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about" >About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


