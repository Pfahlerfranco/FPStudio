import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import ProjectCard from "../component/ProjectCard";
import { projects } from "./Portfolio";
import "../styles/home.css";

const ease = [0.22, 1, 0.36, 1];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="hero-status"
        >
          <span className="hero-dot" />
          Disponible para trabajar · Buenos Aires
        </motion.div>

        <div className="hero-body">
          <p className="hero-lead">
            Developer Full Stack Jr. Construyo APIs, bases de datos y
            aplicaciones web.
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.12, ease }}
            className="hero-first"
            aria-label="Franco Pfahler"
          >
            Franco
          </motion.h1>

          <div className="hero-row">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease }}
              className="hero-last"
              aria-hidden="true"
            >
              Pfahler
            </motion.p>

            <div className="hero-actions">
              <Link to="/portfolio" className="link-line">
                Ver proyectos <FiArrowDownRight size={18} className="to-se" />
              </Link>
              <Link to="/contact" className="link-line">
                Contactame <FiArrowUpRight size={18} className="to-ne" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--top">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">01 / Trabajo reciente</span>
            <h2 className="sec-title em-muted">
              Proyectos
              <br />
              <em>destacados</em>
            </h2>
          </div>

          <div className="projects-list">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="home-more">
            <Link to="/portfolio" className="link-line">
              Ver todos los proyectos <FiArrowUpRight size={18} className="to-ne" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--top">
        <div className="wrap home-cta">
          <div>
            <span className="label">02 / Contacto</span>
            <h2 className="sec-title em-accent home-cta-title">
              Ponete en
              <br />
              <em>contacto.</em>
            </h2>
            <p className="lead home-cta-text">
              ¿Tenés un proyecto en mente o querés trabajar juntos? Mandame un
              mensaje y te respondo a la brevedad.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary home-cta-btn">
            Enviar mensaje <FiArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
