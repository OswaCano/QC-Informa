import React from 'react';
import { Link } from 'react-router-dom';

function MyReports() {
  // Datos de ejemplo hardcodeados
  const mockReports = [
    {
      id: 1,
      title: 'Fuga de agua en baños del módulo A',
      date: '2023-11-15',
      status: 'pending',
      description: 'Hay una fuga de agua en los lavabos del baño de hombres en el módulo A.',
      location: 'Módulo A, Baños',
      category: 'Infraestructura'
    },
    {
      id: 2,
      title: 'Luminarias dañadas en estacionamiento',
      date: '2023-11-12',
      status: 'in-progress',
      description: 'Varias luminarias del estacionamiento principal no funcionan, generando inseguridad.',
      location: 'Estacionamiento Principal',
      category: 'Seguridad'
    },
    {
      id: 3,
      title: 'Banca rota en área verde',
      date: '2023-11-08',
      status: 'resolved',
      description: 'Una de las bancas en el área verde central está rota y representa un peligro.',
      location: 'Área Verde Central',
      category: 'Mobiliario'
    },
    {
      id: 4,
      title: 'Proyector no funciona en aula D-13',
      date: '2023-11-05',
      status: 'resolved',
      description: 'El proyector del aula D-13 no enciende correctamente y tiene problemas de imagen.',
      location: 'Aula D-13',
      category: 'Equipo'
    }
  ];

  // Función para obtener el texto del estado
  const getStatusText = (status) => {
    switch(status) {
      case 'pending': return 'Pendiente';
      case 'in-progress': return 'En Proceso';
      case 'resolved': return 'Resuelto';
      default: return 'Desconocido';
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-text">QC-Informa</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/my-reports" className="active">Mis Reportes</Link></li>
            <li><Link to="/new-report">Crear Reporte</Link></li>
            <li><Link to="/profile">Mi Perfil</Link></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link to="/" className="header-button outline">Logout</Link>
        </div>
      </header>

      <main>
        <section className="page-header-section">
          <h1>Mis Reportes</h1>
          <p>Visualiza y gestiona todos tus reportes enviados</p>
        </section>

        <section className="reports-management-section">
          <div className="reports-filters">
            <div className="filter-group">
              <label>Filtrar por estado:</label>
              <select className="filter-select">
                <option value="all">Todos</option>
                <option value="pending">Pendientes</option>
                <option value="in-progress">En Proceso</option>
                <option value="resolved">Resueltos</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Ordenar por:</label>
              <select className="filter-select">
                <option value="date-desc">Fecha (más reciente)</option>
                <option value="date-asc">Fecha (más antiguo)</option>
                <option value="title">Título</option>
                <option value="status">Estado</option>
              </select>
            </div>
            <button className="filter-button primary">Aplicar Filtros</button>
          </div>

          <div className="reports-list detailed">
            {mockReports.map(report => (
              <div key={report.id} className="report-item detailed">
                <div className={`report-status ${report.status}`}></div>
                <div className="report-content">
                  <h3>{report.title}</h3>
                  <div className="report-meta">
                    <span className="report-date">Fecha: {new Date(report.date).toLocaleDateString('es-MX')}</span>
                    <span className="report-category">Categoría: {report.category}</span>
                    <span className="report-location">Ubicación: {report.location}</span>
                    <span className={`report-status-text ${report.status}`}>Estado: {getStatusText(report.status)}</span>
                  </div>
                  <p className="report-description">{report.description}</p>
                </div>
                <div className="report-actions">
                  <button className="action-button primary">Ver Detalles</button>
                  {report.status !== 'resolved' && (
                    <button className="action-button secondary">Editar</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="pagination-button" disabled>&lt; Anterior</button>
            <div className="pagination-numbers">
              <button className="pagination-number active">1</button>
              <button className="pagination-number">2</button>
              <button className="pagination-number">3</button>
            </div>
            <button className="pagination-button">Siguiente &gt;</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>QC-Informa</h3>
            <p>Plataforma para reportar problemas en CUCEI</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/home">Inicio</Link></li>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Email: soporte@qcinforma.cucei.udg.mx</p>
            <p>Teléfono: (33) 1234-5678</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 QC-Informa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyReports;