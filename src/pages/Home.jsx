import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SplitText from "../component/SplitText";
import FloatingLines from "../component/FloatingLines";
import ProjectCard from "../component/ProjectCard";
import { projects } from "./Portfolio";
import "../styles/home.css";

const stack = ["Node.js", "Python", "React", "PostgreSQL", "MongoDB", "Docker"];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <FloatingLines
            linesGradient={["#c5f23d", "#3ddc97", "#1a8f7a"]}
            lineCount={[5, 7, 5]}
            lineDistance={[5, 7, 5]}
          />
        </div>

        <div className="hero-content container">
          <span className="hero-status rise" style={{ "--i": 0 }}>
            <span className="hero-status-dot" aria-hidden="true" />
            Disponible para trabajar · Buenos Aires
          </span>

          <SplitText
            tag="h1"
            text="Franco Pfahler"
            className="hero-title"
            delay={40}
            duration={1}
            textAlign="left"
            from={{ opacity: 0, y: 32 }}
          />

          <p className="hero-subtitle rise" style={{ "--i": 3 }}>
            Developer Full Stack Jr. Construyo APIs, bases de datos y
            aplicaciones web.
          </p>

          <div className="hero-buttons rise" style={{ "--i": 4 }}>
            <Link to="/portfolio" className="btn btn--primary">
              Ver proyectos <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn--ghost">Contactame</Link>
          </div>

          <ul className="hero-stack rise" style={{ "--i": 5 }} aria-label="Stack principal">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page home-projects">
        <div className="container">
          <div className="home-projects-head">
            <div>
              <span className="eyebrow">Trabajo reciente</span>
              <h2>Proyectos destacados</h2>
            </div>
            <Link to="/portfolio" className="home-all">
              Ver todos <FaArrowRight />
            </Link>
          </div>

          <div className="projects-grid">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
