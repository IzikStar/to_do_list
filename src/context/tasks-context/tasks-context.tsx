import { createContext } from "react";
import type { Task } from "../../types";

export interface TasksContextType {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  removeTask: (taskId: Task["id"]) => void;
  editTask: (newTaskDetails: Task) => void;
}

export const TasksContext = createContext<TasksContextType | null>(null);
