import { useNavigate } from 'react-router-dom';
import { fakeAuth, removeToken, getToken } from './auth';
import { useEffect } from 'react';
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    fakeAuth.signout(() => {
      removeToken();
      navigate('/login');
    });
  };

  const audioMessages = [
    { id: 1, title: 'Message 1', src: '/audios/Eglise.mp3' },
    { id: 2, title: 'Message 2', src: '/audios/rachel.m4a' },
    { id: 3, title: 'Message 3', src: '/audios/Hawai.wav' },
  ];

  return (
    <div className="home-container">
      <header>
        <h2>Bienvenue M4mmoth!</h2>
        <button onClick={handleLogout}>Déconnexion</button>
      </header>
      <div className="audio-messages-container">
        <h3>Liste des Messages Audio</h3>
        <ul>
          {audioMessages.map((message) => (
            <li key={message.id} className="audio-message">
              <h4>{message.title}</h4>
              <audio controls>
                <source src={message.src} type="audio/mpeg" />
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
