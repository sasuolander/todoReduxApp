import { Iitem } from "../appInterface/itemInterface";

export interface IItemState {
  items: Iitem[];
}

export interface IAppState {
taskStore:IItemState;

}
