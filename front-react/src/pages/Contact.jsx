import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Contact.css";

export default function Contact() {
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
        <section className="contact-section">
          <h1 className="section-title">Contáctanos</h1>
          <p className="section-subtitle">Estamos aquí para ayudarte.</p>

          <div className="contact-info">
            <p><strong>Dirección:</strong> CUCEI, Blvd. Gral. Marcelino García Barragán 1421, Olímpica, 44430 Guadalajara, Jal.</p>
            <p><strong>Email:</strong> info@qc-informa.com</p>
            <p><strong>Teléfono:</strong> (33) 1234 5678</p>
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