import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./About.css";

export default function About() {
  const navigate = useNavigate(); // Inicializa useNavigate

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-text" onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
            QC-Informa
          </span>
        </div>
      </header>

      <main>
        <section className="about-section">
          <h1 className="section-title">Sobre Nosotros</h1>
          <p className="section-subtitle">Conoce más sobre nuestro proyecto y equipo.</p>

          <div className="about-content">
            <p>
              QC-Informa es una plataforma diseñada para mejorar las instalaciones del CUCEI. Nuestro objetivo es
              proporcionar una herramienta eficiente para que estudiantes, docentes y personal administrativo puedan
              reportar problemas y sugerir mejoras en el campus.
            </p>
            <p>
              Este proyecto fue desarrollado por un equipo apasionado de estudiantes y profesionales comprometidos con
              la mejora continua de nuestro entorno educativo.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">QC-Informa</div>
            <p>Plataforma para reportar y mejorar las instalaciones de CUCEI.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} QC-Informa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}