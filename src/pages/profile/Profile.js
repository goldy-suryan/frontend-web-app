import { datadogLogs } from '@datadog/browser-logs';
import { useEffect, useState } from 'react';

function Profile() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    datadogLogs.logger.info('Profile page: flkadsjfklsdkfjlasdk');
    apiCall();
  }, []);

  const apiCall = async () => {
    try {
      let resp = await fetch('https://jsonplaceholder.typicode.com/todos');
      setTodos(await resp.json());
    } catch (e) {
      console.log(e);
      datadogLogs.logger.error(e, {
        reason: 'some reason',
        severity: 'critical',
      });
    }
  };

  return (
    <div>
      <h3>Profile</h3>
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item?.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Profile;
