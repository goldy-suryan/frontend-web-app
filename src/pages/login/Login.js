import React from 'react';

function Login() {
  return (
    <div className="w-25 mx-auto">
      <h3>Login</h3>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input type="text" name="username" className="form-control" />
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" name="password" className="form-control" />
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}

export default Login;
