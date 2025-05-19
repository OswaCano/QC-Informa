import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Services.css";

export default function Services() {
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
        <section className="services-section">
          <h1 className="section-title">Nuestros Servicios</h1>
          <p className="section-subtitle">Descubre cómo podemos ayudarte.</p>

          <div className="services-list">
            <div className="service-item">
              <h3>Reporte de Problemas</h3>
              <p>Permite a los usuarios reportar problemas en las instalaciones del campus.</p>
            </div>
            <div className="service-item">
              <h3>Sugerencias de Mejora</h3>
              <p>Recopilamos ideas para mejorar el entorno educativo y administrativo.</p>
            </div>
            <div className="service-item">
              <h3>Seguimiento de Reportes</h3>
              <p>Consulta el estado de los reportes enviados y su progreso.</p>
            </div>
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