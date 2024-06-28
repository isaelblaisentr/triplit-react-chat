import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Users from './pages/Users';
import { MainLayout } from './components/layout/MainLayout.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index path="/" element={<Users />} />
      <Route index path="/users" element={<Users />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
