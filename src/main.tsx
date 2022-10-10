import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

if (process.env.NODE_ENV === 'development') {
  await import('./mocks/browser').then((m) => m.worker.start());
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
