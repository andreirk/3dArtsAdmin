import { IUser } from "~/models/IUser";

type OrderType = 'asc' | 'desc';

export interface ArtGalleryState {
    currentItem: unknown;
    items?: unknown[];
    itemsMap?: unknown;
    isLoading?: boolean;
    error?: string;
    order: OrderType | string;
    modalWindow?: {
        isOpen?: boolean
    },
}

export enum ArtGalleryActionsEnum {
    SET_CURRENT_GALERRY_ITEM = 'SET_CURRENT_GALERRY_ITEM',
    SET_ERROR = 'SET_ERROR',
    SET_GALLERY_ITEMS = 'SET_GALLERY_ITEMS',
    SET_GALLERY_ITEMS_MAP = 'SET_GALLERY_ITEMS_MAP',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_IS_MODAL_OPEN = 'SET_IS_MODAL_OPEN',
    CREATE_NEW_ITEM = 'CREATE_NEW_ITEM',
    UPDATE_ITEM = 'UPDATE_ITEM',
    SORT = 'SORT',

}

export interface SetArtGalleryItemsAction {
    type: ArtGalleryActionsEnum.SET_GALLERY_ITEMS;
    payload: unknown[];
}
export interface SortItemsAction {
    type: ArtGalleryActionsEnum.SORT;
    payload?: string;
}
export interface CreateNewItemAction {
    type: ArtGalleryActionsEnum.CREATE_NEW_ITEM;
    payload: any;
}
export interface UpdateItemAction {
    type: ArtGalleryActionsEnum.UPDATE_ITEM;
    payload: any;
}
export interface SetArtGalleryMapAction {
    type: ArtGalleryActionsEnum.SET_GALLERY_ITEMS_MAP;
    payload: unknown;
}
export interface SetErrorAction {
    type: ArtGalleryActionsEnum.SET_ERROR;
    payload: string;
}
export interface SetIsLoadingAction {
    type: ArtGalleryActionsEnum.SET_IS_LOADING;
    payload: boolean;
}
export interface SetArtItemAction {
    type: ArtGalleryActionsEnum.SET_CURRENT_GALERRY_ITEM;
    payload: any;
}

export interface SetIsArtItemModalOpen {
    type: ArtGalleryActionsEnum.SET_IS_MODAL_OPEN;
    payload: boolean;
}

export type ObjectRequestsAction = 
SetArtGalleryItemsAction 
    | SetErrorAction
    | SetArtItemAction
    | SetIsLoadingAction
    | SetIsArtItemModalOpen
    | SetArtGalleryMapAction
    | CreateNewItemAction
    | UpdateItemAction
    | SortItemsAction