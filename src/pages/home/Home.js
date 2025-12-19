import { datadogLogs } from '@datadog/browser-logs';
import { useLocation, useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Profile from '../profile/Profile';
import User from '../user/User';
import { useState } from 'react';
import Logout from '../logout/Logout';

function Home() {
  const location = useLocation();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const navigateToProfile = () => {
    datadogLogs.logger.info('User navigating to profile');
    navigate('/profile');
  };

  const handleChange = (e) => {
    setUsername(e?.target?.value);
  };

  return (
    <div>
      <h3>Home</h3>
      {location.pathname != '/' && <Logout />}
      <p>
        Checking for masking of input :{' '}
        <input type="text" onChange={handleChange} name="username" />
      </p>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="user" title="User">
          <User />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Profile />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          Tab content for Contact
        </Tab>
      </Tabs>
      {/* <button
        type="button"
        className="btn btn-primary"
        onClick={navigateToProfile}
      >
        Profile
      </button> */}
    </div>
  );
}

export default Home;
