import React from "react";
import { useNavigate } from "react-router-dom";
import "./Comments.css";

export default function Comments() {
  const navigate = useNavigate();

  // Datos de ejemplo para los comentarios
  const comments = [
    {
      id: 1,
      user: "Juan Pérez",
      date: "Hace 2 días",
      comment: "El área de los laboratorios necesita más iluminación. Es un poco inseguro por las noches.",
    },
    {
      id: 2,
      user: "María López",
      date: "Hace 5 días",
      comment: "Sería genial tener más espacios verdes en el campus. ¡Haría el ambiente más agradable!",
    },
    {
      id: 3,
      user: "Carlos García",
      date: "Hace 1 semana",
      comment: "El estacionamiento necesita más señalización para evitar confusiones.",
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
        <section className="comments-section">
          <h1 className="section-title">Comentarios de la Comunidad</h1>
          <p className="section-subtitle">Lee lo que otros usuarios tienen que decir sobre el campus.</p>

          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <h3>{comment.user}</h3>
                  <p className="comment-date">{comment.date}</p>
                </div>
                <p className="comment-text">{comment.comment}</p>
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