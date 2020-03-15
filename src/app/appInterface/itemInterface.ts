export interface Iitem {
  taskId: number;
  task: string;
}

export class ItemFormClass implements Iitem {
  taskId = 0;
  task = "";
}
