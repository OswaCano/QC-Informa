import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-text">QC-Informa</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link to="/" className="header-button outline">Logout</Link>
        </div>
      </header>

      <main>
        <section className="welcome-section">
          <div className="welcome-content">
            <h1>¡Bienvenido a QC-Informa!</h1>
            <p>Gracias por iniciar sesión. Ahora puedes comenzar a reportar problemas y ayudar a mejorar CUCEI.</p>
          </div>
        </section>

        <section className="dashboard-section">
          <h2 className="section-title">Tu Panel de Control</h2>
          
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <div className="card-icon reports"></div>
              <h3>Mis Reportes</h3>
              <p>Visualiza y gestiona tus reportes enviados</p>
              <button className="card-button">Ver Reportes</button>
            </div>
            
            <div className="dashboard-card">
              <div className="card-icon new-report"></div>
              <h3>Nuevo Reporte</h3>
              <p>Crea un nuevo reporte de problema en el campus</p>
              <button className="card-button">Crear Reporte</button>
            </div>
            
            <div className="dashboard-card">
              <div className="card-icon profile"></div>
              <h3>Mi Perfil</h3>
              <p>Actualiza tu información personal y preferencias</p>
              <button className="card-button">Editar Perfil</button>
            </div>
          </div>
        </section>

        <section className="recent-reports-section">
          <h2 className="section-title">Reportes Recientes</h2>
          
          <div className="reports-list">
            <div className="report-item">
              <div className="report-status pending"></div>
              <div className="report-content">
                <h3>Fuga de agua en baños del módulo A</h3>
                <p className="report-date">Hace 2 días</p>
                <p className="report-description">Hay una fuga de agua en los lavabos del baño de hombres en el módulo A.</p>
              </div>
              <div className="report-actions">
                <button className="action-button">Ver Detalles</button>
              </div>
            </div>
            
            <div className="report-item">
              <div className="report-status in-progress"></div>
              <div className="report-content">
                <h3>Luminarias dañadas en estacionamiento</h3>
                <p className="report-date">Hace 5 días</p>
                <p className="report-description">Varias luminarias del estacionamiento principal no funcionan, generando inseguridad.</p>
              </div>
              <div className="report-actions">
                <button className="action-button">Ver Detalles</button>
              </div>
            </div>
            
            <div className="report-item">
              <div className="report-status resolved"></div>
              <div className="report-content">
                <h3>Banca rota en área verde</h3>
                <p className="report-date">Hace 1 semana</p>
                <p className="report-description">Una de las bancas en el área verde central está rota y representa un peligro.</p>
              </div>
              <div className="report-actions">
                <button className="action-button">Ver Detalles</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">QC-Informa</div>
            <p>Plataforma para reportar y mejorar las instalaciones de CUCEI.</p>
            <div className="social-icons">
              <a href="#" className="social-icon facebook"></a>
              <a href="#" className="social-icon twitter"></a>
              <a href="#" className="social-icon instagram"></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Acerca de</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>CUCEI, Blvd. Gral. Marcelino García Barragán 1421, Olímpica, 44430 Guadalajara, Jal.</p>
            <p>Email: info@qc-informa.com</p>
            <p>Teléfono: (33) 1234 5678</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} QC-Informa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;