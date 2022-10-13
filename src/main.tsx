import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// mock 서버가 첫 구동 때 늘려지는 주범임으로 진짜 쓸 때 아니면 빼라
// if (process.env.NODE_ENV === 'development') {
//   await import('./mocks/browser').then((m) =>
//     m.worker.start({ quiet: true, onUnhandledRequest: 'bypass' })
//   );
// }

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
