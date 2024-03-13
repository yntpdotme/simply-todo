import {useNavigate} from 'react-router-dom';

import './GuestLogin.css'

const GuestLogin = ({label}) => {
  const navigate = useNavigate();

  const handleGuestSignIn = async () => {
    navigate('/todos');
  };
  return (
    <>
      <button onClick={handleGuestSignIn} className="guest">
        <span>{label || 'Sign In as Guest'}</span>
      </button>
    </>
  );
};

export default GuestLogin;
