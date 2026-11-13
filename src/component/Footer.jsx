import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="footer-logo">
            <span>&lt;</span>FP<span>/&gt;</span>
          </h2>

          <p>
            Desarrollo de aplicaciones web, APIs y soluciones escalables.
            Productos eficientes y experiencias digitales de calidad.
          </p>

          <div className="status">
            <span className="status-dot" aria-hidden="true"></span>
            Disponible para trabajar
          </div>
        </div>

        <nav className="footer-col" aria-label="Navegación del pie">
          <h3>Navegación</h3>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/portfolio">Proyectos</NavLink>
          <NavLink to="/about">Sobre mí</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </nav>

        <div className="footer-col">
          <h3>Contacto</h3>
          <p>Buenos Aires, Argentina</p>

          <div className="socials">
            <a href="https://github.com/Pfahlerfranco" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/franco-pfahler/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:pfahlerfranco@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FP Studio — Desarrollador Web</span>
      </div>
    </footer>
  );
}
