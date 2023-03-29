import React from "react";
import { Github } from "react-bootstrap-icons";


function Footer() {
  return(
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="copyright">
              <p className="copyright-text">Bookworm Library &copy; 2022 All Rights Reserved.</p>
            </div>
            <div>
              <ul className="social-icons">
                <li>
                  <a className="github" href="https://github.com/meganorth14/Bookworm-Library">
                    <Github size={30} color="#fff" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <hr></hr>
        </div>
      </footer>
    </>
  );
}

export default Footer;
