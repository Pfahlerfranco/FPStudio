import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner wrap">
        <div className="footer-place">
          <FiMapPin size={13} />
          Buenos Aires, Argentina
        </div>

        <div className="footer-social">
          <a href="mailto:pfahlerfranco@gmail.com" aria-label="Email">
            <FiMail size={17} />
          </a>
          <a href="https://github.com/Pfahlerfranco" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub size={17} />
          </a>
          <a href="https://www.linkedin.com/in/franco-pfahler/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={17} />
          </a>
        </div>

        <p>© {new Date().getFullYear()} FP Studio — Desarrollador Web</p>
      </div>
    </footer>
  );
}
