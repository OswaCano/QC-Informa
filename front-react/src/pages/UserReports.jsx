import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserReports.css";

export default function UserReports() {
  const navigate = useNavigate();

  // Datos de ejemplo para los reportes
  const reports = [
    {
      id: 1,
      title: "Fuga de agua en baños del módulo A",
      date: "Hace 2 días",
      status: "Pendiente",
      description: "Hay una fuga de agua en los lavabos del baño de hombres en el módulo A.",
    },
    {
      id: 2,
      title: "Luminarias dañadas en estacionamiento",
      date: "Hace 5 días",
      status: "En progreso",
      description: "Varias luminarias del estacionamiento principal no funcionan, generando inseguridad.",
    },
    {
      id: 3,
      title: "Banca rota en área verde",
      date: "Hace 1 semana",
      status: "Resuelto",
      description: "Una de las bancas en el área verde central está rota y representa un peligro.",
    },
  ];

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
        <section className="reports-section">
          <h1 className="section-title">Mis Reportes</h1>
          <p className="section-subtitle">Aquí puedes ver todos los reportes que has enviado.</p>

          <div className="reports-list">
            {reports.map((report) => (
              <div key={report.id} className="report-item">
                <div className={`report-status ${report.status.toLowerCase().replace(" ", "-")}`}></div>
                <div className="report-content">
                  <h3>{report.title}</h3>
                  <p className="report-date">{report.date}</p>
                  <p className="report-description">{report.description}</p>
                </div>
                <div className="report-actions">
                  <button className="action-button">Ver Detalles</button>
                </div>
              </div>
            ))}
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