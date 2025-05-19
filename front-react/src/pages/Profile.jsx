import { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [formData, setFormData] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '123-456-7890',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'El nombre es obligatorio';
    }
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    if (formData.password && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Perfil actualizado:', formData);
      alert('Perfil actualizado con éxito');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <Link to="/home" className="logo-text">QC-Informa</Link>
        </div>
      </header>

      <main>
        <section className="profile-section">
          <div className="profile-container">
            <h2 className="section-title">Mi Perfil</h2>
            <p className="profile-subtitle">Actualiza tu información personal y preferencias.</p>
            
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Ingresa tu número de teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Nueva Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingresa una nueva contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirma tu nueva contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? 'error' : ''}
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>

              <button type="submit" className="auth-button primary">Actualizar Perfil</button>
            </form>
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

export default Profile;