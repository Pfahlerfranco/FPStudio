import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import "../styles/contact.css";


const EMAILJS_SERVICE_ID  = "franzierserviceweb";
const EMAILJS_TEMPLATE_ID = "template_k51ya5c";
const EMAILJS_PUBLIC_KEY  = "5MX2zFHfh-kt0lB7M";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="page">
      <div className="container contact-layout">
        <header className="contact-intro">
          <span className="eyebrow rise" style={{ "--i": 0 }}>Contacto</span>
          <h1 className="rise" style={{ "--i": 1 }}>
            Ponete en <em>contacto</em>
          </h1>
          <p className="rise" style={{ "--i": 2 }}>
            ¿Tenés un proyecto en mente o querés trabajar juntos? Mandame un mensaje
            y te respondo a la brevedad.
          </p>

          <ul className="contact-social-links rise" style={{ "--i": 3 }}>
            <li>
              <a href="mailto:pfahlerfranco@gmail.com" className="contact-social-link">
                <FaEnvelope /> pfahlerfranco@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/Pfahlerfranco" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <FaGithub /> github.com/Pfahlerfranco
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/franco-pfahler/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <FaLinkedin /> linkedin.com/in/franco-pfahler
              </a>
            </li>
          </ul>
        </header>

        <form ref={formRef} className="contact-form rise" style={{ "--i": 2 }} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from_name">Nombre</label>
              <input id="from_name" name="from_name" type="text" placeholder="Tu nombre" autoComplete="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to">Email</label>
              <input id="reply_to" name="reply_to" type="email" placeholder="tu@email.com" autoComplete="email" autoCapitalize="none" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input id="subject" name="subject" type="text" placeholder="¿De qué se trata?" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows={6} placeholder="Contame sobre tu proyecto o consulta..." required />
          </div>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <div className="form-feedback success">Mensaje enviado. Te respondo pronto.</div>
            )}
            {status === "error" && (
              <div className="form-feedback error">
                Hubo un error al enviar. Intentá de nuevo o escribime directamente.
              </div>
            )}
          </div>

          <button type="submit" className="btn btn--primary form-submit" disabled={status === "loading"}>
            <FaPaperPlane />
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}
