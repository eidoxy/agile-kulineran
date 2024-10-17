import { Route, Routes } from 'react-router-dom';

import routes from './routes';

function App() {
  return (
    <>
      <Routes>
        {routes.map((routes, index) => {
          const { path, component: Component } = routes;
          return (
            <Route
              key={index}
              path={path}
              element={<Component />}
            />
          );
        })}
      </Routes>
    </>
  )
}

export default App
