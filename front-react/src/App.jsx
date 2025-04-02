import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './pages/Auth.css';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PostForm from './components/posts/PostForm.jsx';

//Paginas de la aplicación
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<PostForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
