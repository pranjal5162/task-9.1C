import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Stay connected</h3>
          <div className="social-icons">
            <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="Facebook" />
            <img src="https://img.icons8.com/ios-filled/50/twitter.png" alt="Twitter" />
            <img src="https://img.icons8.com/ios-filled/50/instagram-new.png" alt="Instagram" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          <strong>DEV@Deakin 2022</strong>
        </p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
