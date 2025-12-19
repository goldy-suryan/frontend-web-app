import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    datadogRum.clearUser();
    datadogRum.stopSessionReplayRecording();
    datadogRum.clearGlobalContext();

    datadogLogs.removeGlobalContextProperty('ddsource');
    navigate('/');
  };

  return (
    <div className="d-flex justify-content-end m-3">
      <button type="button" className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
