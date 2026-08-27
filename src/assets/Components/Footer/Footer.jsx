import React from "react";
import styles from "./Footer.module.css";
// Import social icons from react-icons/fa6
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>
        {/* Social Icons Section */}
        <div className={styles.socialIcons}>
          <a href="#facebook" aria-label="Facebook">
            <FaFacebookF size={22} />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <FaInstagram size={22} />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <FaTwitter size={22} />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <FaYoutube size={22} />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.footerLinksGrid}>
          <ul className={styles.linkColumn}>
            <li>
              <a href="#audio">Audio Description</a>
            </li>
            <li>
              <a href="#investor">Investor Relations</a>
            </li>
            <li>
              <a href="#legal">Legal Notices</a>
            </li>
          </ul>
          <ul className={styles.linkColumn}>
            <li>
              <a href="#help">Help Centre</a>
            </li>
            <li>
              <a href="#jobs">Jobs</a>
            </li>
            <li>
              <a href="#cookies">Cookie Preferences</a>
            </li>
          </ul>
          <ul className={styles.linkColumn}>
            <li>
              <a href="#gift">Gift Cards</a>
            </li>
            <li>
              <a href="#terms">Terms of Use</a>
            </li>
            <li>
              <a href="#corporate">Corporate Information</a>
            </li>
          </ul>
          <ul className={styles.linkColumn}>
            <li>
              <a href="#media">Media Centre</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.copyright}>© 1997-2026 Netflix, Inc.</div>
      </div>
    </footer>
  );
}

export default Footer;
