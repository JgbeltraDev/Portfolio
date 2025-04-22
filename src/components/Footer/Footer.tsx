import { FaGithub, FaInstagram, FaMailchimp } from "react-icons/fa";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="https://github.com/">
            <FaGithub className={styles.footerIcon} />
          </a>
          <a href="">
            <FaInstagram className={styles.footerIcon} />
          </a>
          <a href="">
            <FaMailchimp className={styles.footerIcon} />
          </a>
        </div>
        <p className={styles.copyright}>
          © 2025 Jose Beltrán. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
