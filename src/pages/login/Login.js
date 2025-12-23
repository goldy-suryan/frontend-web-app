import { useNavigate } from 'react-router-dom';
import { initializeRUM } from '../../datadog-rum';
import { datadogRum } from '@datadog/browser-rum';
import { useEffect, useState } from 'react';

function Login() {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('auth_token');

  useEffect(() => {
    if(token) {
      navigate('/home');
    }
  }, [token])

  const handleUserId = (e) => {
    setUserId(e?.target?.value);
  };

  const login = () => {
    if (!userId) return setError('Please provide userId');
    // on successful login we initialize the RUM
    localStorage.setItem('auth_token', userId);
    initializeRUM(userId);
 
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  };

  return (
    <div className="w-25 mx-auto">
      <h3>Login</h3>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter user Id
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          onChange={handleUserId}
        />
      </div>
      <p className="text-danger">{error}</p>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
