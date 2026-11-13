import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "./Portfolio";
import Carousel from "../component/Carousel";
import "../styles/about.css";
import "../styles/project.css";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="page">
        <div className="container container--narrow project-not-found">
          <h1>Proyecto no encontrado</h1>
          <Link to="/portfolio" className="btn btn--ghost">
            <FaArrowLeft /> Volver al portfolio
          </Link>
        </div>
      </div>
    );
  }

  const imageItems = project.images
    ? project.images.map((url, i) => ({ id: i, image: url, title: `${project.title} - ${i + 1}` }))
    : [];

  const hasGithub = project.github && project.github !== "#";
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <div className="page">
      <div className="container container--narrow">
        <Link to="/portfolio" className="project-back">
          <FaArrowLeft /> Volver al portfolio
        </Link>

        <header className="page-head">
          {project.soon && <span className="eyebrow rise" style={{ "--i": 0 }}>Próximamente</span>}
          <h1 className="rise" style={{ "--i": 1 }}>{project.title}</h1>

          {(hasGithub || hasDemo) && (
            <div className="project-detail-links rise" style={{ "--i": 2 }}>
              {hasDemo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  <FaExternalLinkAlt /> Ver demo
                </a>
              )}
              {hasGithub && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <FaGithub /> Ver en GitHub
                </a>
              )}
            </div>
          )}
        </header>

        {imageItems.length > 0 && (
          <div className="project-detail-gallery">
            <Carousel
              items={imageItems}
              baseWidth="100%"
              autoplay
              autoplayDelay={3000}
              pauseOnHover={false}
              loop
              round={false}
            />
          </div>
        )}

        <section className="about-row">
          <h2 className="section-label">Descripción</h2>
          <p className="project-desc">{project.description}</p>
        </section>

        <section className="about-row">
          <h2 className="section-label">Tecnologías</h2>
          <ul className="project-detail-tags">
            {project.tags.map((tag) => (
              <li key={tag} className="skill-badge">{tag}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
