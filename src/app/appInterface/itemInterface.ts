export interface Iitem {
  taskId: number;
  task: string;
}

export interface IitemInput {
  task: string;
}
export class ItemFormClass implements Iitem {
  taskId: number;
  task = "";
}
