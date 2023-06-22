import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<>Идет загрузка</>}>
              <Component />
            </Suspense>
          }
        />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
