import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/portfolio.css";

const isLink = (url) => url && url !== "#";
const pad = (n) => String(n + 1).padStart(2, "0");

/* Fila de proyecto: imagen 8/12 + ficha 4/12, se alterna el lado.
   Imagen y título van al detalle; GitHub y Demo son links reales aparte. */
export default function ProjectCard({ project, index }) {
  const [failed, setFailed] = useState(false);
  const cover = project.images?.[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`project-row ${index % 2 ? "project-row--flip" : ""}`}
    >
      <Link
        to={`/project/${project.id}`}
        className="project-visual"
        aria-label={`Ver ${project.title}`}
      >
        {cover && !failed ? (
          <img
            src={cover}
            alt={`Imagen ilustrativa de ${project.title}`}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="project-fallback" aria-hidden="true">{pad(index)}</span>
        )}
        <span className="project-visual-shade" />
        <span className="project-visual-arrow">
          <FiArrowUpRight size={20} />
        </span>
      </Link>

      <div className="project-info">
        <div className="project-meta">
          <span>{pad(index)}</span>
          <span>{project.soon ? "Próximamente" : project.type}</span>
        </div>

        <h3>
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </h3>

        <p>{project.description}</p>

        <div className="project-bottom">
          <ul className="project-tags" aria-label="Tecnologías">
            {project.tags.map((tag) => (
              <li key={tag}>/ {tag}</li>
            ))}
          </ul>

          {(isLink(project.github) || isLink(project.demo)) && (
            <div className="project-links">
              {isLink(project.github) && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub <FiArrowUpRight size={13} />
                </a>
              )}
              {isLink(project.demo) && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Demo <FiArrowUpRight size={13} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
