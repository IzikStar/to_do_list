import type { ListTypes } from "./list-types";

export type Task = {
  id: number;
  title: string;
  description: string;
  type: ListTypes;
  dueTime: Date;
};
