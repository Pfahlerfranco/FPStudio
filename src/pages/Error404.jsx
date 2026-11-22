import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/error404.css";

// Header y Footer vienen del Layout; no se vuelven a renderizar acá.
export default function Error404() {
  return (
    <section className="error404">
      <div className="wrap error404-inner">
        <span className="label rise" style={{ "--i": 0 }}>Error / 404</span>
        <p className="error404-code rise" style={{ "--i": 1 }} aria-hidden="true">404</p>
        <div className="error404-foot rise" style={{ "--i": 2 }}>
          <div>
            <h1>Página no encontrada</h1>
            <p>La página que buscás no existe o fue movida.</p>
          </div>
          <Link to="/" className="btn btn--primary">
            Volver al inicio <FiArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
