import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import { RootPage } from '~/routes/pages/RootPage';
import { PrevewPage } from '~/routes/pages/PreviewPage';

import { ROUTES_PATHS } from '../model';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const publicRoutes: IRoute[] = [
  { path: ROUTES_PATHS.root, exact: true, component: RootPage } ,
  { path: ROUTES_PATHS.galleryPreview, exact: true, component: PrevewPage } ,
]


export const AppRouter = () => (
    <Routes>
      {
        publicRoutes.map(route => {
          const PublicComponet = route.component
          return <Route key={route.path} path={route.path} element={<PublicComponet/> } />
        })

      }
    </Routes>
);
