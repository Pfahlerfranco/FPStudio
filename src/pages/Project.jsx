import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "./Portfolio";
import Carousel from "../component/Carousel";
import "../styles/project.css";

const isLink = (url) => url && url !== "#";

export default function Project() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  if (!project) {
    return (
      <section className="section section--page">
        <div className="wrap project-not-found">
          <span className="label">Error / Proyecto</span>
          <h1 className="sec-title">Proyecto no encontrado</h1>
          <Link to="/portfolio" className="btn btn--outline">
            <FiArrowLeft size={16} /> Volver al portfolio
          </Link>
        </div>
      </section>
    );
  }

  const imageItems = (project.images ?? []).map((url, i) => ({
    id: i,
    image: url,
    title: `${project.title} - ${i + 1}`,
  }));

  return (
    <section className="section section--page">
      <div className="wrap">
        <Link to="/portfolio" className="project-back">
          <FiArrowLeft size={14} /> Volver al portfolio
        </Link>

        <header className="project-head">
          <div className="project-head-meta rise" style={{ "--i": 0 }}>
            <span className="label">{String(index + 1).padStart(2, "0")} / {project.type}</span>
            {project.soon && <span className="project-soon">Próximamente</span>}
          </div>

          <h1 className="project-title rise" style={{ "--i": 1 }}>{project.title}</h1>

          {(isLink(project.github) || isLink(project.demo)) && (
            <div className="project-detail-links rise" style={{ "--i": 2 }}>
              {isLink(project.demo) && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  Ver demo <FiArrowUpRight size={18} />
                </a>
              )}
              {isLink(project.github) && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                  <FiGithub size={16} /> Ver en GitHub <FiArrowUpRight size={18} />
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

        <div className="detail-row">
          <h2 className="detail-label">Descripción</h2>
          <p className="detail-text">{project.description}</p>
        </div>

        <div className="detail-row">
          <h2 className="detail-label">Tecnologías</h2>
          <ul className="detail-tags">
            {project.tags.map((tag) => (
              <li key={tag}>/ {tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
