import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import "../styles/about.css";

const skillGroups = [
  { label: "Backend", items: ["Node.js", "Express.js", "Python", "FastAPI", ".NET", "REST APIs"] },
  { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "CMS"] },
  { label: "Datos", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { label: "Infra y herramientas", items: ["Docker", "AWS", "Linux", "Windows", "Git"] },
  { label: "Metodologías", items: ["Agile", "Scrum"] },
];

const facts = [
  { k: "Ubicación", v: "Buenos Aires, AR" },
  { k: "Estudios", v: "Lic. en Informática" },
  { k: "Universidad", v: "UNAHUR · 3er año" },
  { k: "Foco", v: "APIs, datos y web" },
];

export default function About() {
  return (
    <>
      <section className="section section--page about-head">
        <div className="wrap">
          <span className="label rise" style={{ "--i": 0 }}>Sobre mí</span>
          <h1 className="about-title em-accent rise" style={{ "--i": 1 }}>
            APIs robustas y apps web <em>escalables.</em>
          </h1>
          <p className="lead rise" style={{ "--i": 2 }}>
            Developer Full Stack Jr enfocado en construir software que funcione
            en producción.
          </p>
        </div>
      </section>

      <section className="section about-profile">
        <div className="wrap about-profile-grid">
          <span className="label about-profile-label">01 / Biografía</span>

          <div className="about-profile-body">
            <p className="about-statement">
              Soy Franco Pfahler, tengo 26 años y soy Desarrollador Full Stack Jr con base en
              Buenos Aires, Argentina.
            </p>

            <div className="about-profile-cols">
              <div className="about-prose">
                <p>
                  Estudio la Licenciatura en Informática en la Universidad Nacional de
                  Hurlingham (3er año). Me especializo en el diseño e implementación de APIs,
                  arquitecturas de bases de datos y aplicaciones web de alto rendimiento.
                </p>
                <p>
                  Mi enfoque está en escribir código limpio, escalable y bien documentado.
                  Disfruto resolver problemas complejos y aprender nuevas tecnologías para
                  entregar soluciones que realmente funcionen en producción y satisfagan la
                  necesidad del cliente.
                </p>
              </div>

              <dl className="about-facts">
                {facts.map(({ k, v }) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="about-stack-head">
            <span className="label">02 / Tech stack</span>
            <h2 className="sec-title">Stack &amp; oficio</h2>
          </div>

          <div>
            {skillGroups.map(({ label, items }, i) => (
              <div key={label} className="stack-row">
                <span className="stack-num">0{i + 1}</span>
                <h3>{label}</h3>
                <ul>
                  {items.map((skill) => (
                    <li key={skill}>/ {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="about-cv">
            {/* Para actualizar el CV, reemplazá el archivo en /public */}
            <a
              href={`${import.meta.env.BASE_URL}cv_FrancoPfahler_Desarrollador2026.pdf`}
              download
              className="btn btn--primary"
            >
              <FiDownload size={16} /> Descargar CV <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
