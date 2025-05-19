import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreationPost.css";

export default function CreationPost() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para manejar el envío del formulario
    alert("Formulario enviado con éxito");
    navigate("/home"); // Redirige al Home después de enviar
  };

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
        <section className="creation-section">
          <div className="form-container">
            <h1 className="section-title">¿Te interesa mejorar algo?</h1>
            <p className="section-subtitle">Hazlo notar llenando el siguiente formulario.</p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Nombre completo</label>
                <input type="text" id="fullName" placeholder="Ingresa tu nombre completo" />
              </div>

              <div className="form-group">
                <label htmlFor="studentCode">Código de Estudiante (Si se tiene uno)</label>
                <input type="text" id="studentCode" placeholder="Ingresa tu código de estudiante" />
              </div>

              <div className="form-group">
                <label htmlFor="careerCode">Código de carrera (Si aplica)</label>
                <input type="text" id="careerCode" placeholder="Ingresa tu código de carrera" />
              </div>

              <div className="form-group">
                <label htmlFor="reportType">¿Reporte o sugerencia?</label>
                <select id="reportType">
                  <option value="">Selecciona una opción</option>
                  <option value="reporte">Reporte</option>
                  <option value="sugerencia">Sugerencia</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="occupation">¿A qué te dedicas?</label>
                <select id="occupation">
                  <option value="">Selecciona una opción</option>
                  <option value="estudiante">Estudiante</option>
                  <option value="docente">Docente</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Cuéntanos sobre la situación (Adjunta evidencia si es necesario)</label>
                <textarea id="description" rows="4" placeholder="Escribe aquí..."></textarea>
              </div>

              <div className="form-group terms">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  Acepto los términos <a href="#">Leer T&Cs</a>
                </label>
              </div>

              <button type="submit" className="cta-button primary">Enviar</button>
            </form>
          </div>

          <div className="illustration-container">
            <img src="/illustration.png" alt="Ilustración" className="illustration" />
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
