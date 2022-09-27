import * as React from 'react';
import { Route } from 'react-router-dom';

const LazyPage = (LazyNode: React.LazyExoticComponent<() => JSX.Element>) => {
  return (
    <React.Suspense fallback={<h1>loading</h1>}>
      <LazyNode />
    </React.Suspense>
  );
};

const Buttons = React.lazy(() => import('./Buttons'));

const ComponentsDisplayRoute = (
  <>
    <Route path="buttons" element={LazyPage(Buttons)} />
  </>
);

export default ComponentsDisplayRoute;
