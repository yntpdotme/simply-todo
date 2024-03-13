import {Link, useNavigate} from 'react-router-dom';

import {AuthForm} from '@components';

import './SignInPage.css';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    navigate('/todos');
  };

  return (
    <div>
      <h1>Log In</h1>
      <div className="authform">
        <AuthForm onSubmit={handleSignIn} buttonText="Sign in" />
      </div>
      <p className="footer">
        No Account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
