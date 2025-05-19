import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Aquí típicamente harías una llamada a la API para autenticar al usuario
      console.log('Formulario enviado:', formData);
      // Por ahora, solo redirigiremos a la página de inicio
      navigate('/home');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <Link to="/" className="logo-text">QC-Informa</Link>
        </div>
      </header>

      <main>
        <section className="auth-section">
          <div className="auth-container">
            <h2 className="auth-title">Iniciar Sesión</h2>
            <p className="auth-subtitle">¡Bienvenido de nuevo! Por favor ingresa tus datos.</p>
            
            <form className="auth-form" onSubmit={handleSubmit}>
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
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <div className="form-options">
                <div className="remember-me">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Recuérdame</label>
                </div>
                <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
              </div>
              
              <button type="submit" className="auth-button primary">Iniciar Sesión</button>
            </form>
            
            <div className="auth-footer">
              <p>¿No tienes una cuenta? <Link to="/signup" className="auth-link">Regístrate</Link></p>
            </div>
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

export default SignIn;