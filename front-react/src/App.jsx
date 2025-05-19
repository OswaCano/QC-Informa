import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './pages/Auth.css';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PostForm from './components/posts/PostForm.jsx';
import CreationPost from './pages/Creationpost.jsx';
import Profile from './pages/Profile.jsx'; // Importa el nuevo archivo Profile
import UserReports from './pages/UserReports'; // Importa la nueva página
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Comments from './pages/Comments'; // Importa la nueva página

//Paginas de la aplicación
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<PostForm />} />
        <Route path="/creation" element={<CreationPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reports" element={<UserReports />} /> {/* Nueva ruta */}
        <Route path="/comments" element={<Comments />} /> {/* Nueva ruta */}
        <Route path="/about" element={<About />} /> {/* Nueva ruta */}
        <Route path="/services" element={<Services />} /> {/* Nueva ruta */}
        <Route path="/contact" element={<Contact />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
