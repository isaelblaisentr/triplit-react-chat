import React from 'react';
import { SideBar } from './SideBar.tsx';
import { Outlet } from 'react-router-dom';
import { Page } from './Page.tsx';

export function MainLayout() {
  return (
    <React.Fragment>
      <SideBar />
      <Page>
        <Outlet />
      </Page>
    </React.Fragment>
  );
}
