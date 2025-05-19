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
            <li><Link to="/home" className="active">Inicio</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link to="/profile" className="header-button profile-icon">
            <img 
              src="https://img.icons8.com/ios-filled/50/3BB77E/user.png" 
              alt="Perfil" 
              style={{ width: '24px', height: '24px' }} 
            />
          </Link>
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
              <Link to="/reports">
                <button className="card-button">Ver Reportes</button>
              </Link>
            </div>
            
            <div className="dashboard-card">
              <div className="card-icon new-report"></div>
              <h3>Nuevo Reporte</h3>
              <p>Crea un nuevo reporte de problema en el campus</p>
              <Link to="/creation">
                <button className="card-button">Crear Reporte</button>
              </Link>
            </div>
            
            <div className="dashboard-card">
              <div className="card-icon profile"></div>
              <h3>Mi Perfil</h3>
              <p>Actualiza tu información personal y preferencias</p>
              <Link to="/profile">
                <button className="card-button">Editar Perfil</button>
              </Link>
            </div>

            <div className="dashboard-card">
              <div className="card-icon comments"></div>
              <h3>Comentarios</h3>
              <p>Lee lo que otros usuarios tienen que decir sobre el campus</p>
              <Link to="/comments">
                <button className="card-button">Ver Comentarios</button>
              </Link>
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
              <li><Link to="/home">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/services">Servicios</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
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
          <p>&copy; {new Date().getFullYear()} QC-Informa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;