import ProjectCard from "../component/ProjectCard";
import "../styles/portfolio.css";

export const projects = [
  {
    id: "paginaWeb-FrontEnd",
    type: "Portfolio personal",
    title: "<FP> Studio",
    description: "Pagina Web personal para mi Portafolio, desarrollada con React. Diseño responsivo y optimizado para SEO.",
    tags: ["React.js", "React Router", "React Developer Tools"],
    github: "#", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=1200&fit=crop&auto=format",
    ],
  },
  {
    id: "administracion-web",
    type: "Aplicación full-stack",
    title: "Administracion Web UNAHUR",
    description: "Aplicación web full-stack para gestión de agendas, prestadores, afiliados y consultas . Backend en Nodes.js con Express, frontend en React y base de datos PosgresSQL.",
    tags: ["Node.js", "Express", "React", "PostgreSQL"],
    github: "https://github.com/DesApp-2025c2-Grupo1", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1600&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&h=1200&fit=crop&auto=format",
    ],
  },
  {
    id: "Api-AntiSocial-MongoDB",
    type: "Backend / API",
    title: "Api AntiSocial MongoDB",
    description: "API para gestión de contenido anti-social con integración a MongoDB. Incluye autenticación, validación de datos y manejo de errores.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Pfahlerfranco/Api-AntiSocial-MongoDB", 
    demo: null,
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=1600&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=1200&fit=crop&auto=format",
    ],
  },
  {
    id: "automotoresDamian-api",
    type: "E-commerce",
    title: "E-commerce Automotores Damian e Hijo",
    soon: true,
    description: "Página web completa para tienda online con gestión de productos, carrito, pedidos y pagos.",
    tags: ["Node.js", "MongoDB", "Docker", "AWS"],
    github: "#", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=1200&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=1200&fit=crop&auto=format",
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="section section--page">
      <div className="wrap">
        <header className="sec-head">
          <span className="label rise" style={{ "--i": 0 }}>Portfolio</span>
          <div>
            <h1 className="sec-title em-muted rise" style={{ "--i": 1 }}>
              Mis
              <br />
              <em>proyectos</em>
            </h1>
          </div>
        </header>
        <p className="lead rise" style={{ "--i": 2, marginBottom: 96 }}>
          Una selección de proyectos en los que trabajé.
        </p>

        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
