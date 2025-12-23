import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { initializeRUM } from './datadog-rum';
import routes from './routes';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('auth_token');

    if (token) {
      initializeRUM(token);
    }
  }, []);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
