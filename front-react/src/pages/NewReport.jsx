import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewReport() {
  // Estados para el formulario
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: 'Infraestructura',
    image: null
  });

  // Categorías de ejemplo
  const categories = [
    'Infraestructura',
    'Seguridad',
    'Mobiliario',
    'Equipo',
    'Servicios',
    'Otros'
  ];

  // Ubicaciones de ejemplo
  const locations = [
    'Módulo A',
    'Módulo B',
    'Módulo C',
    'Módulo D',
    'Módulo E',
    'Módulo F',
    'Módulo G',
    'Módulo H',
    'Módulo I',
    'Módulo J',
    'Módulo K',
    'Módulo L',
    'Módulo M',
    'Módulo N',
    'Módulo O',
    'Módulo P',
    'Módulo Q',
    'Módulo R',
    'Módulo T',
    'Módulo Z',
    'Biblioteca',
    'Cafetería',
    'Estacionamiento',
    'Áreas Verdes',
    'Auditorio',
    'Otro'
  ];

  // Manejador de cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador para la carga de imágenes
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el reporte
    console.log('Datos del reporte:', formData);
    alert('Reporte enviado con éxito!');
    // Resetear el formulario
    setFormData({
      title: '',
      description: '',
      location: '',
      category: 'Infraestructura',
      image: null
    });
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
            <li><Link to="/new-report" className="active">Crear Reporte</Link></li>
            <li><Link to="/profile">Mi Perfil</Link></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link to="/" className="header-button outline">Logout</Link>
        </div>
      </header>

      <main>
        <section className="page-header-section">
          <h1>Nuevo Reporte</h1>
          <p>Crea un nuevo reporte de problema en el campus</p>
        </section>

        <section className="report-form-section">
          <form className="report-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Título del Reporte*</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ej. Fuga de agua en baños"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Categoría*</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Ubicación*</label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una ubicación</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción del Problema*</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe detalladamente el problema que has encontrado..."
                rows="5"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="image">Imagen (opcional)</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
              />
              <small>Sube una imagen que muestre el problema (máx. 5MB)</small>
            </div>

            {formData.image && (
              <div className="image-preview">
                <h4>Vista previa:</h4>
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Vista previa"
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              </div>
            )}

            <div className="form-actions">
              <button type="button" className="form-button secondary" onClick={() => window.history.back()}>Cancelar</button>
              <button type="submit" className="form-button primary">Enviar Reporte</button>
            </div>
          </form>
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

export default NewReport;