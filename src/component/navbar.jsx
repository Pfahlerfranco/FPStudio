import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre mí" },
  { to: "/portfolio", label: "Portfolio" },
];
const cta = { to: "/contact", label: "Contacto" };
const mobileLinks = [...links, cta];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Escape cierra el menú; mientras está abierto no se scrollea la página
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <div className="navbar-container">
      <NavLink to="/" className="logo" onClick={closeMenu} aria-label="FP Studio, inicio">
        <span>&lt;</span>FP<span>/&gt;</span>
      </NavLink>

      {/* Escritorio */}
      <nav className="nav-desktop" aria-label="Principal">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <NavLink to={cta.to} className="btn btn--outline nav-cta">
        {cta.label} <FiArrowUpRight size={14} />
      </NavLink>

      {/* Móvil */}
      <button
        className="menu-btn"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        aria-label="Menú móvil"
        aria-hidden={!isOpen}
      >
        {mobileLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            {label}
            <span>0{i + 1}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
