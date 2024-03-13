import {Link, useNavigate} from 'react-router-dom';

import {AuthForm} from '@components';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    navigate('/todos');
  };

  return (
    <div>
      <h1>Create Account</h1>
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
    </div>
  );
};

export default SignUpPage;
