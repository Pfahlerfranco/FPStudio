import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "../styles/contact.css";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = () => {
    if (status === "error" || status === "success") setStatus("idle");
  };

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(t);
    }
  }, [status]);

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
    <section className="section section--page">
      <div className="wrap contact-grid">
        <div>
          <span className="label rise" style={{ "--i": 0 }}>Contacto</span>
          <h1 className="sec-title em-accent contact-title rise" style={{ "--i": 1 }}>
            Ponete en
            <br />
            <em>contacto.</em>
          </h1>
          <p className="lead contact-lead rise" style={{ "--i": 2 }}>
            ¿Tenés un proyecto en mente o querés trabajar juntos? Mandame un mensaje
            y te respondo a la brevedad.
          </p>

          <ul className="contact-links rise" style={{ "--i": 3 }}>
            <li>
              <a href="mailto:pfahlerfranco@gmail.com">
                <FiMail size={16} /> pfahlerfranco@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/Pfahlerfranco" target="_blank" rel="noopener noreferrer">
                <FiGithub size={16} /> github.com/Pfahlerfranco
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/franco-pfahler/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin size={16} /> linkedin.com/in/franco-pfahler
              </a>
            </li>
          </ul>
        </div>

        <form ref={formRef} className="contact-form rise" style={{ "--i": 2 }} onSubmit={handleSubmit}>
          <div className="field-row">
            <label className="field" htmlFor="from_name">
              <span>Nombre</span>
              <input id="from_name" name="from_name" type="text" placeholder="Tu nombre" autoComplete="name" required />
            </label>
            <label className="field" htmlFor="reply_to">
              <span>Email</span>
              <input id="reply_to" name="reply_to" type="email" placeholder="tu@email.com" autoComplete="email" autoCapitalize="none" required />
            </label>
          </div>

          <label className="field" htmlFor="subject">
            <span>Asunto</span>
            <input id="subject" name="subject" type="text" placeholder="¿De qué se trata?" required />
          </label>

          <label className="field" htmlFor="message">
            <span>Mensaje</span>
            <textarea id="message" name="message" rows={4} placeholder="Contame sobre tu proyecto o consulta..." required />
          </label>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="form-feedback success">Mensaje enviado. Te respondo pronto.</p>
            )}
            {status === "error" && (
              <p className="form-feedback error">
                Hubo un error al enviar. Intentá de nuevo o escribime directamente.
              </p>
            )}
          </div>

          <button type="submit" className="btn btn--primary form-submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            <FiArrowUpRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
