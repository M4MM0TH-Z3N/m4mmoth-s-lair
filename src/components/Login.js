import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../firebase'; // Importer Firebase
import { setToken } from '../auth'; // Importer la fonction de gestion des tokens
import './login.css'; // Importez le fichier CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setToken('firebase-token');
      navigate('/');
      setAttempts(0);
    } catch (error) {
      setAttempts(attempts + 1);
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p className={`message error ${error ? 'visible' : ''}`}>
          {error}
        </p>
        <p className={`message hint ${attempts >= 3 ? 'visible' : ''}`}>
          Hint: ma passion préférée
        </p>
      </form>
    </div>
  );
};

export default Login;
