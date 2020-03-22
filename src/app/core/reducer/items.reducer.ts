import { IItemState } from "./../storeInterface";
import { createReducer, on } from "@ngrx/store";
import { addItem, removeItem } from "../action/editAction";

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
    items: [...state.items, action.item]
  })),
  on(removeItem, (state, action) => ({
    ...state,
    items: state.items.filter(item => {
      // triple-equals does not work in this situation
      return item.taskId != action.id;
    })
  }))
);
