import './App.css'

function App() {
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
          <button className="header-button outline">Sign In</button>
          <button className="header-button">Sign Up</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Hagamos de CUCEI un lugar mejor</h1>
            <p>Queremos que los estudiantes tengan un sentimiento de pertenencia con su campus y ayuden a mantenerlo 
              en condiciones óptimas</p>
            <div className="hero-buttons">
              <button className="cta-button primary">Comenzar</button>
              <button className="cta-button secondary">Leer más</button>
            </div>
          </div>
          <div className="hero-image">
            {/* Hero image will be added via CSS */}
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <h2>85%</h2>
            <p>Estudiantes satisfechos</p>
          </div>
          <div className="stat-item">
            <h2>25+</h2>
            <p>Reportes atendidos</p>
          </div>
          <div className="stat-item">
            <h2>12K+</h2>
            <p>Usuarios activos</p>
          </div>
        </section>

        <section className="features-section">
          <h2 className="section-title">Nuestros servicios</h2>
          <div className="features-container">
            <div className="feature-card">
              <div className="feature-icon sustainability"></div>
              <h3>Puntos</h3>
              <p>Obtén puntos, logros e insignias para demostrar que eres el mejor</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon conservation"></div>
              <h3>Chat</h3>
              <p>Tus inquietudes serán atendidas y registradas con nuestro chat de inteligencia artificial.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon education"></div>
              <h3>Votaciones</h3>
              <p>Vota por los posts que sean más relevantes para ti y se les dará prioridad.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>¿Listo para comenzar?</h2>
            <p>Únete a nuestra comunidad y ayuda a mejorar CUCEI</p>
            <button className="cta-button primary">Registrarse ahora</button>
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
            <h4>Contáctanos</h4>
            <p>Email: info@qc-informa.com</p>
            <p>Teléfono: (33) 1234-5678</p>
            <p>CUCEI, Blvd. Gral. Marcelino García Barragán 1421</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 QC-Informa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
