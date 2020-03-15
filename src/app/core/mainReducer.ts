import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './storeInterface';
import { itemsReducer } from './reducer/items.reducer';

export const reducers: ActionReducerMap<IAppState> = {
taskStore:itemsReducer
}


