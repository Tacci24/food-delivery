import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-brand">Tacci Foods</h2>
          <p className="footer-text">
            Order your favourite meals and will be delivered to your doorstep
            asap!
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact us on:</h3>
          <ul className="footer-links">
            <li>
              Email:
              <a href="mailto:favouritefoods@gmail.com">
                 favouritefoods@gmail.com
              </a>
            </li>
            <li>
              Call: <a>+254793811204</a>
            </li>
            <li>
              WhatsApp: <a>Order via WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p>
          &copy; {new Date().getFullYear()} Tacci Foods. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
