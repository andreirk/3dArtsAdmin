import { joinPath } from '../lib';

export enum RoutePathsEnum {
  Root = '/',
  Preview = 'preview',
 
}

export const ROUTES_PATHS = {
  root: RoutePathsEnum.Root,
  galleryPreview: joinPath([
    RoutePathsEnum.Root,
    RoutePathsEnum.Preview,
  ]),
 
};

