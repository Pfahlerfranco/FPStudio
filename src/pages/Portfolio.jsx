import ProjectCard from "../component/ProjectCard";
import "../styles/portfolio.css";

export const projects = [
  {
    id: "paginaWeb-FrontEnd",
    title: "<FP> Studio",
    description: "Pagina Web personal para mi Portafolio, desarrollada con React. Diseño responsivo y optimizado para SEO.",
    tags: ["React.js", "React Router", "React Developer Tools"],
    github: "#", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1627873649417-af542667a3d7?w=800&h=400&fit=crop",
    ],
  },
  {
    id: "administracion-web",
    title: "Administracion Web UNAHUR",
    description: "Aplicación web full-stack para gestión de agendas, prestadores, afiliados y consultas . Backend en Nodes.js con Express, frontend en React y base de datos PosgresSQL.",
    tags: ["Node.js", "Express", "React", "PostgreSQL"],
    github: "https://github.com/DesApp-2025c2-Grupo1", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1551531623-df8f1629ae3d?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f5ae4e8b908?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=400&fit=crop",
    ],
  },
  {
    id: "Api-AntiSocial-MongoDB",
    title: "Api AntiSocial MongoDB",
    description: "API para gestión de contenido anti-social con integración a MongoDB. Incluye autenticación, validación de datos y manejo de errores.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Pfahlerfranco/Api-AntiSocial-MongoDB", 
    demo: null,
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604386439900-59ef12a723f7?w=800&h=400&fit=crop",
    ],
  },
  {
    id: "automotoresDamian-api",
    title: "E-commerce Automotores Damian e Hijo",
    soon: true,
    description: "Página web completa para tienda online con gestión de productos, carrito, pedidos y pagos.",
    tags: ["Node.js", "MongoDB", "Docker", "AWS"],
    github: "#", 
    demo: "#",   
    images: [
      "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526373965369-ea8ac28bccf2?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507238691515-186a50e1cae8?w=800&h=400&fit=crop",
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="page">
      <div className="container">
        <header className="page-head">
          <span className="eyebrow rise" style={{ "--i": 0 }}>Portfolio</span>
          <h1 className="rise" style={{ "--i": 1 }}>Mis <em>proyectos</em></h1>
          <p className="rise" style={{ "--i": 2 }}>Una selección de proyectos en los que trabajé.</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.id} className="rise" style={{ "--i": i + 3 }}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
