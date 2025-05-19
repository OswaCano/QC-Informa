import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  // Datos de ejemplo hardcodeados para el perfil
  const [profileData, setProfileData] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@alumnos.udg.mx',
    studentId: '123456789',
    career: 'Ingeniería en Computación',
    semester: '6',
    phone: '3312345678',
    notifications: true,
    theme: 'light'
  });

  // Carreras de ejemplo
  const careers = [
    'Ingeniería en Computación',
    'Ingeniería Informática',
    'Ingeniería Civil',
    'Ingeniería Química',
    'Ingeniería Industrial',
    'Ingeniería Mecánica',
    'Ingeniería Eléctrica',
    'Ingeniería Biomédica',
    'Ingeniería en Alimentos',
    'Licenciatura en Química',
    'Licenciatura en Física',
    'Licenciatura en Matemáticas'
  ];

  // Manejador de cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData({
      ...profileData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para actualizar el perfil
    console.log('Datos del perfil actualizados:', profileData);
    alert('Perfil actualizado con éxito!');
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
            <li><Link to="/my-reports">Mis Reportes</Link></li>
            <li><Link to="/new-report">Crear Reporte</Link></li>
            <li><Link to="/profile" className="active">Mi Perfil</Link></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link to="/" className="header-button outline">Logout</Link>
        </div>
      </header>

      <main>
        <section className="page-header-section">
          <h1>Mi Perfil</h1>
          <p>Actualiza tu información personal y preferencias</p>
        </section>

        <section className="profile-section">
          <div className="profile-container">
            <div className="profile-sidebar">
              <div className="profile-avatar">
                <img src="https://via.placeholder.com/150" alt="Foto de perfil" />
                <button className="change-avatar-button">Cambiar foto</button>
              </div>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-label">Reportes Enviados</span>
                  <span className="stat-value">12</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Reportes Resueltos</span>
                  <span className="stat-value">8</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Miembro desde</span>
                  <span className="stat-value">Octubre 2023</span>
                </div>
              </div>
            </div>

            <div className="profile-content">
              <form className="profile-form" onSubmit={handleSubmit}>
                <h3>Información Personal</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleChange}
                      required
                      disabled
                    />
                    <small>El correo no se puede cambiar</small>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="studentId">Código de Estudiante</label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={profileData.studentId}
                      onChange={handleChange}
                      required
                      disabled
                    />
                    <small>El código no se puede cambiar</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      placeholder="Ej. 3312345678"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="career">Carrera</label>
                    <select
                      id="career"
                      name="career"
                      value={profileData.career}
                      onChange={handleChange}
                      required
                    >
                      {careers.map((career, index) => (
                        <option key={index} value={career}>{career}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="semester">Semestre</label>
                    <select
                      id="semester"
                      name="semester"
                      value={profileData.semester}
                      onChange={handleChange}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sem) => (
                        <option key={sem} value={sem.toString()}>{sem}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <h3>Preferencias</h3>
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="notifications"
                    name="notifications"
                    checked={profileData.notifications}
                    onChange={handleChange}
                  />
                  <label htmlFor="notifications">Recibir notificaciones por correo</label>
                </div>

                <div className="form-group">
                  <label htmlFor="theme">Tema de la aplicación</label>
                  <select
                    id="theme"
                    name="theme"
                    value={profileData.theme}
                    onChange={handleChange}
                  >
                    <option value="light">Claro</option>
                    <option value="dark">Oscuro</option>
                    <option value="system">Sistema</option>
                  </select>
                </div>

                <div className="form-actions">
                  <button type="button" className="form-button secondary" onClick={() => window.history.back()}>Cancelar</button>
                  <button type="submit" className="form-button primary">Guardar Cambios</button>
                </div>
              </form>

              <div className="account-actions">
                <h3>Acciones de Cuenta</h3>
                <button className="account-action-button warning">Cambiar Contraseña</button>
                <button className="account-action-button danger">Eliminar Cuenta</button>
              </div>
            </div>
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

export default Profile;