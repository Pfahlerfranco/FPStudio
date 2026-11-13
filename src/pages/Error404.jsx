import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import FuzzyText from "../component/FuzzyText";
import "../styles/error404.css";

// Header y Footer vienen del Layout; no se vuelven a renderizar acá.
export default function Error404() {
  return (
    <div className="error404">
      <div className="error404__content">
        <FuzzyText
          fontSize="clamp(5rem, 24vw, 14rem)"
          fontWeight={800}
          color="#c5f23d"
          glitchMode={true}
          glitchInterval={2500}
          glitchDuration={200}
          baseIntensity={0.1}
          hoverIntensity={0.5}
          enableHover={true}
          fuzzRange={20}
          className="error404__text"
        >
          404
        </FuzzyText>

        <div className="error404__message rise" style={{ "--i": 2 }}>
          <h1>Página no encontrada</h1>
          <p>La página que buscás no existe o fue movida.</p>
        </div>

        <Link to="/" className="btn btn--primary rise" style={{ "--i": 3 }}>
          <FaArrowLeft /> Volver al inicio
        </Link>
      </div>
    </div>
  );
}
