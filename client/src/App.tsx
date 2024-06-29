import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Users from './pages/Users';
import { MainLayout } from './components/layout/MainLayout.tsx';
import Conversations from './pages/Conversations.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index path="/" element={<Users />} />
      <Route index path="/users" element={<Users />} />
      <Route index path="/conversations" element={<Conversations />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
