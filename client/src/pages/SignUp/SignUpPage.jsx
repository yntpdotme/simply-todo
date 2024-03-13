import {Link, useNavigate} from 'react-router-dom';

import {AuthForm, GuestLogin} from '@components';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    navigate('/todos');
  };

  return (
    <div>
      <p className='signup'>Create an account</p>
      <div className="authform">
        <AuthForm
          onSubmit={handleSignUp}
          buttonText="Create my account"
          isSignUp
        />
      </div>
      <p className="footer">
        Have an account? <Link to="/signin">Sign In</Link>
      </p>
      <GuestLogin label={'Try as a Guest'} />
    </div>
  );
};

export default SignUpPage;
