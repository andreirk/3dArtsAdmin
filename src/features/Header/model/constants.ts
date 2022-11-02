import { ROUTES_PATHS } from '~/routes';

import { IMenuItem } from './types';

export const MENU_ITEMS: IMenuItem[] = [
  { key: '1', label: 'Art Gallery Admin', path: ROUTES_PATHS.root },
  { key: '2', label: 'Preview', path: ROUTES_PATHS.galleryPreview },
];
