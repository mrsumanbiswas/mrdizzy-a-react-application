import { React } from "react";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-1">
        <div>
          <img id="footer-img" src="https://yt3.ggpht.com/y29rcaAU7Jr5F606Zkjz0Gcs4KPMYOIWsXTg-KunYXpbdWBo_ZPaKXhkOurm6Mz4F-HWmajP=s88-c-k-c0x00ffffff-no-rj-mo" alt='icon' />
          <p>
            &copy; <span>{new Date().getFullYear()}</span> All rights reserved
          </p>
          <p>Made with ❤️ in India</p>
        </div>
        <p className="footer-content-head"></p>
        <div className="footer-content"></div>
      </div>
      <div id="footer-2">
        <p className="footer-content-head">SOCIAL LINKS</p>
        <div className="footer-content">
          <ul>
            <li>
              <a href="mailto:dizzytechnician@google.com"><img className="soical-logo" src={'media/interface/message.png'} /> Email</a>
            </li>
            <li>
              <a href="https://github.com/mrsumanbiswas"><img className="soical-logo" src={'media/social/github.png'} alt="github logo" /> GitHub</a>
            </li>
            <li>
              <a href="https://t.me/MrDizzy_Bot" target={'_blank'}><img className="soical-logo" src={'media/social/telegram.png'} alt="telegram logo" /> Telegram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mrsumanbiswas/"><img className="soical-logo" src="media/social/linkedin.png" alt="LinkedIn" /> LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-3">
        <p className="footer-content-head">OTHER LINKS</p>
        <div className="footer-content">
          <ul>
            <li className="footer-other-link"><a target={"_blank"} href="">Other links</a></li>
            <li className="footer-other-link"><a target={"_blank"} href="">Other links</a></li>
            <li className="footer-other-link"><a target={"_blank"} href="">Other links</a></li>
            <li className="footer-other-link"><a target={"_blank"} href="">Other links</a></li>
            <li className="footer-other-link"><a target={"_blank"} href="">Other links</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;


