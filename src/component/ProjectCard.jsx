import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import "../styles/portfolio.css";

const isLink = (url) => url && url !== "#";

/* Un solo link principal (stretched link) + links secundarios reales por encima.
   Evita anidar elementos interactivos dentro de un <a>. */
export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        {project.soon && <span className="project-soon">Próximamente</span>}
      </div>

      <h3>
        <Link to={`/project/${project.id}`} className="project-card-link">
          {project.title}
        </Link>
      </h3>

      <p>{project.description}</p>

      <ul className="project-tags" aria-label="Tecnologías">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">{tag}</li>
        ))}
      </ul>

      <div className="project-foot">
        <div className="project-links">
          {isLink(project.github) && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> GitHub
            </a>
          )}
          {isLink(project.demo) && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
        <FaArrowRight className="project-arrow" aria-hidden="true" />
      </div>
    </article>
  );
}
