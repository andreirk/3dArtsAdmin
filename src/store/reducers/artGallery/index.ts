

import { ArtGalleryActionsEnum, ObjectRequestsAction, ArtGalleryState } from "./types"



const initState: ArtGalleryState = {
    error: '',
    isLoading: false,
    items: [],
    itemsMap: {},
    currentItem: null,
    modalWindow: {
        isOpen: false
    },
    order: 'asc'
}

export default function artGalleryReducer(state = initState, action: ObjectRequestsAction): ArtGalleryState {
    switch(action.type) {
        case ArtGalleryActionsEnum.SET_GALLERY_ITEMS:
           
            return { ...state, items: action.payload, isLoading: false }
        case ArtGalleryActionsEnum.SET_GALLERY_ITEMS_MAP:
           
            return { ...state, itemsMap: action.payload, isLoading: false }
        case ArtGalleryActionsEnum.SET_CURRENT_GALERRY_ITEM:
            return { ...state, currentItem: action.payload }
        case ArtGalleryActionsEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        case ArtGalleryActionsEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case ArtGalleryActionsEnum.SET_IS_MODAL_OPEN:
            return { ...state, modalWindow: { ...state.modalWindow, isOpen: action.payload } }
        case ArtGalleryActionsEnum.CREATE_NEW_ITEM:
            action.payload.id = state.items.length + 11;
            return { ...state, items: [ ...state.items,  action.payload ] }
        case ArtGalleryActionsEnum.SORT:
            let sortedItems = [...state.items];
            sortedItems.sort((a: any, b: any) => {
                const num1 = a.itemOrder;
                const num2 = b.itemOrder;
                const curOrderType = state.order;
                if(action.payload === 'asc'){
                    return num1 - num2;
                } else return num2 - num1;
            }) 
            return { ...state, items: sortedItems, order: action.payload  }
        case ArtGalleryActionsEnum.UPDATE_ITEM:
            let theIndex = state.items.findIndex((el: any) => el.id === action.payload.id);
            let resultItems = [ 
                ...state.items.slice(0, theIndex),  action.payload, ...state.items.slice(theIndex + 1) ]
             
            return { ...state, items: resultItems }
        default:
            return state;
    }
}