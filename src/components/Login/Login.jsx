import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import Header from '../Header/Header'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (email === 'admin@gmail.com' && password === '123456') {
      sessionStorage.setItem('user', JSON.stringify({ email }));
      navigate('/home');
    } else {
      setErrorMessage('Usuário ou senha inválidos');
    }
  };
  
  return (
    <div className="login-container">
      <Header/>
      <div className="login-card">

      <form onSubmit={handleSubmit} className="login-form">
        <h1>LOGIN</h1>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
            />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
            />
        </div>
        <button type="submit" className="login-button">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
            </div>
    </div>
  );
};

export default Login;
