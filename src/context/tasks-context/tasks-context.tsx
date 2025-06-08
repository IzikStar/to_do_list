import { createContext } from "react";
import type { ListTypes, Task } from "../../types";

export interface TasksContextType {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (taskId: Task["id"]) => void;
  editTask: (newTaskDetails: Task) => void;
  changeTaskState: (task: Task, newState: ListTypes) => void;
}

export const TasksContext = createContext<TasksContextType | null>(null);
