import { FaDownload } from "react-icons/fa";
import "../styles/about.css";

const skillGroups = [
  { label: "Backend", items: ["Node.js", "Express.js", "Python", "FastAPI", ".NET", "REST APIs"] },
  { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "CMS"] },
  { label: "Datos", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { label: "Infra y herramientas", items: ["Docker", "AWS", "Linux", "Windows", "Git"] },
  { label: "Metodologías", items: ["Agile", "Scrum"] },
];

const facts = [
  { k: "Ubicación", v: "Buenos Aires, Argentina" },
  { k: "Estudios", v: "Lic. en Informática, UNAHUR (3er año)" },
  { k: "Foco", v: "APIs, bases de datos y apps web" },
];

export default function About() {
  return (
    <div className="page">
      <div className="container container--narrow">
        <header className="page-head">
          <span className="eyebrow rise" style={{ "--i": 0 }}>Sobre mí</span>
          <h1 className="rise" style={{ "--i": 1 }}>
            APIs robustas y apps web <em>escalables</em>
          </h1>
          <p className="rise" style={{ "--i": 2 }}>
            Developer Full Stack Jr enfocado en construir software que funcione en producción.
          </p>
        </header>

        <section className="about-row">
          <h2 className="section-label">Biografía</h2>
          <div className="about-bio">
            <p>
              Soy Franco Pfahler, tengo 26 años y soy Desarrollador Full Stack Jr con base en
              Buenos Aires, Argentina. Estudio la Licenciatura en Informática en la Universidad
              Nacional de Hurlingham (3er año). Me especializo en el diseño e implementación de
              APIs, arquitecturas de bases de datos y aplicaciones web de alto rendimiento.
            </p>
            <p>
              Mi enfoque está en escribir código limpio, escalable y bien documentado. Disfruto
              resolver problemas complejos y aprender nuevas tecnologías para entregar soluciones
              que realmente funcionen en producción y satisfagan la necesidad del cliente.
            </p>

            <dl className="about-facts">
              {facts.map(({ k, v }) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="about-row">
          <h2 className="section-label">Tech stack</h2>
          <div className="skill-groups">
            {skillGroups.map(({ label, items }) => (
              <div key={label} className="skill-group">
                <h3>{label}</h3>
                <ul>
                  {items.map((skill) => (
                    <li key={skill} className="skill-badge">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="about-row about-cv">
          <h2 className="section-label">Currículum</h2>
          <div>
            {/* Para actualizar el CV, reemplazá el archivo en /public */}
            <a
              href={`${import.meta.env.BASE_URL}cv_FrancoPfahler_Desarrollador2026.pdf`}
              download
              className="btn btn--primary"
            >
              <FaDownload /> Descargar CV
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
