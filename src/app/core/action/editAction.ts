import { createAction, props } from "@ngrx/store";
import { actionEdit } from "../actionConstant";
import { Iitem } from "../../appInterface/itemInterface";

// createAction<T extends string>(type: T): ActionCreator<T, () => TypedAction<T>>;



export const addItem = createAction(
  actionEdit.ADD_ITEM,
  (item:Iitem)=>{
    const randomId = Math.floor(Math.random() * 500)
    item.taskId = randomId;
    return {item};
  }
);
export const editItem = createAction(
  actionEdit.REMOVE_ITEM,
  (item:Iitem)=>({item})
);
export const removeItem = createAction(
  actionEdit.REMOVE_ITEM,
  (id:number)=>({id})
);
