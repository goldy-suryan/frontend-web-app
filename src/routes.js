import { createBrowserRouter } from '@datadog/browser-rum-react/react-router-v6';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

const routes = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/home', element: <Home /> },
  { path: '/profile', element: <Profile /> },
]);

export default routes;
