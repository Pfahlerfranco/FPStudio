import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre mí" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Escape cierra el drawer; el scroll de la página se bloquea mientras está abierto
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

      <button
        className="hamburger"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="nav-links"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`nav-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav id="nav-links" className={`nav-links ${isOpen ? "open" : ""}`} aria-label="Principal">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
