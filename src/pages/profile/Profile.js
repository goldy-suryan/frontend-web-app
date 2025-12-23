import { datadogLogs } from '@datadog/browser-logs';
import { useEffect, useMemo, useState } from 'react';

function Profile({username}) {
  const [todos, setTodos] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    datadogLogs.logger.info('Profile page: flkadsjfklsdkfjlasdk');
    apiCall();
  }, []);

  let debounce = (fn, delay) => {
    let timer;
    // throw new Error('error here');
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    }
  }

  const debouncedFilter = useMemo(() => {
    return debounce((name, list) => {
      let result = list.filter(item => item?.title?.toLowerCase()?.includes(name?.toLowerCase()));
      setFilteredData(result);
    }, 700)
  }, []);

  useEffect(() => {
    debouncedFilter(username, todos);
  }, [username, todos, debouncedFilter])

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
        {filteredData?.map((item) => {
          return <li key={item.id}>{item?.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Profile;
