import { IItemState } from "./../storeInterface";
import { createReducer, on } from "@ngrx/store";
import { addItem } from "../action/editAction";

const initialState: IItemState = {
  items: [
    {
      taskId: 0,
      task: "test"
    }
  ]
};

// https://timdeschryver.dev/blog/ngrx-creator-functions-101
export const itemsReducer = createReducer(
  initialState,
  on(addItem, (state, action) => ({
    ...state,
    items:[...state.items, action.item]
    }
  )),
);
