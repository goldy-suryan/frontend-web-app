import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';
import { datadogLogs } from '@datadog/browser-logs';

let isInitialized = false;

export function initializeRUM(userId) {
  if (isInitialized) return;
  isInitialized = true;

  console.log('datadog rum initialized');
  let clientToken = process.env.REACT_APP_CLIENT_TOKEN;

  datadogRum.init({
    applicationId: process.env.REACT_APP_APPLICATION_ID,
    clientToken,
    site: process.env.REACT_APP_SITE,
    service: process.env.REACT_APP_SERVICE,
    env: 'dev',
    version: process.env.REACT_APP_VERSION,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    defaultPrivacyLevel: 'mask-user-input',
    trackUserInteractions: true,
    trackInteractions: true,
    plugins: [reactPlugin({ router: true })],
  });
  datadogRum.startView();
  datadogRum.startSessionReplayRecording();

  datadogRum.setUser({
    id: userId,
  });

  // Logs
  datadogLogs.init({
    clientToken,
    site: process.env.REACT_APP_SITE,
    service: process.env.REACT_APP_SERVICE,
    env: 'dev',
    version: process.env.REACT_APP_VERSION,
    forwardErrorsToLogs: true,
    sampleRate: 100,
  });
  datadogLogs.setGlobalContextProperty('ddsource', 'browser');
  datadogLogs.setGlobalContextProperty('hello', 'world'); // custom property or tags for easy filtering of logs
  // For reference: https://docs.datadoghq.com/logs/log_collection/javascript/?tab=npm
}
