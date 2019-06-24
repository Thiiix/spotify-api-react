import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return(
    <div>
      <p>Hello!
        <Link to="/authorize">Sign in on Spotify</Link>
      </p>
    </div>
  );

}

export default Login;
