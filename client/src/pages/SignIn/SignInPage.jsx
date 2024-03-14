import {Link, useNavigate} from 'react-router-dom';

import {AuthForm, GuestLogin} from '@components';

import './SignInPage.css';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = async () => {
    navigate('/todos');
  };

  return (
    <div>
      <p className='signin'>Sign In</p>
      <div className="authform">
        <AuthForm onSubmit={handleSignIn} buttonText="Sign in" />
      </div>
      <p className="footer">
        No Account? <Link to="/signup">Sign Up</Link>
      </p>
      <GuestLogin />
    </div>
  );
};

export default SignInPage;
