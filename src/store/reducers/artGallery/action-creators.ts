import { createSelector } from 'reselect';
import ArtGalleryService from '~/api/ArtGalleryService';

import { AppDispatch, RootState } from '../..';

import {
  ArtGalleryActionsEnum,
  SetArtGalleryItemsAction,
  SetArtGalleryMapAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetArtItemAction,
  SetIsArtItemModalOpen,
  SortItemsAction,
} from './types';

const getCurrentState = (state: RootState) => state.artGallery;
const selectCurrentObject = createSelector(
  getCurrentState,
  (state) => state.currentItem
);
const selectAllItemsMap = createSelector(
  getCurrentState,
  (state) => state.itemsMap
);
const selectAllItems = createSelector(
  getCurrentState,
  (state) => state.items
);

export const ArtGalleryActionCreators = {
  setCurrentArtItem: (payload: unknown) : any => ({
    type:ArtGalleryActionsEnum.SET_CURRENT_GALERRY_ITEM,
    payload
  }),
  createNewItem: (payload: unknown) : any => ({
    type:ArtGalleryActionsEnum.CREATE_NEW_ITEM,
    payload
  }),
  updateItem: (payload: unknown) : any => ({
    type:ArtGalleryActionsEnum.UPDATE_ITEM,
    payload
  }),
  setArtItems: (payload: unknown[]): SetArtGalleryItemsAction => ({
    type: ArtGalleryActionsEnum.SET_GALLERY_ITEMS,
    payload: payload,
  }),
  sortArtItems: (payload: string): SortItemsAction => ({
    type: ArtGalleryActionsEnum.SORT,
    payload: payload,
  }),
  setArtItemsMap: (payload: unknown): SetArtGalleryMapAction => ({
    type: ArtGalleryActionsEnum.SET_GALLERY_ITEMS_MAP,
    payload: payload,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: ArtGalleryActionsEnum.SET_IS_LOADING,
    payload,
  }),
  toggleModalWindowOpen: (payload: boolean): SetIsArtItemModalOpen => ({
    type: ArtGalleryActionsEnum.SET_IS_MODAL_OPEN,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: ArtGalleryActionsEnum.SET_ERROR,
    payload,
  }),
  setCurrentArtItemById: (itemId) => async (dispatch: AppDispatch, getState) => {
    const state = getState();
    const items = selectAllItems(state);
    const theItem = items.find((item: any) => item.id === itemId);

    dispatch(ArtGalleryActionCreators.setCurrentArtItem(theItem));
   
  },
  fetchArtItems: () => async (dispatch: AppDispatch, getState) => {
    try {
      dispatch(ArtGalleryActionCreators.setIsLoading(true));
      try {
       const  data  = await ArtGalleryService.fetchAll();
        const state = getCurrentState(getState());
        data.sort((a: any, b: any) => {
            const num1 = a.itemOrder;
            const num2 = b.itemOrder;
            const curOrderType = state.order;
            if(curOrderType === 'asc'){
                return num1 - num2;
            } else return num2 - num1;
        }) 
        const itemsMap = data.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
      },{})

       dispatch(ArtGalleryActionCreators.setArtItems(data))
       dispatch(ArtGalleryActionCreators.setArtItemsMap(itemsMap))

      } catch (err) {
        console.log('--- error while fetch in ', err);
      }
      dispatch(ArtGalleryActionCreators.setIsLoading(false));
   
    } catch (e) {
      dispatch(ArtGalleryActionCreators.setError('Error while login, ' + e));
    }
  },
};
