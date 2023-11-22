import { useNavigate } from 'react-router-dom';
import './style.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="header">
      <div><h1 className="header-title">MediSensi</h1></div>
      <div className="header-content">
        <div><h1 className="header-title">Global Solution 2023 - Engenharia de Software</h1></div>
        <button onClick={handleLogout} className='button-off'>Logout</button>
      </div>
    </header>
  );
};

export default Header;
