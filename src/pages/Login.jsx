import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', 'loggedInUser');
    navigate('/events');
  };

  return (
    <div className="container">
      <h2>🔐 Login</h2>
      <p>Click the button below to simulate login</p>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
