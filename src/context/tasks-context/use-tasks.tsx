import { useContext } from "react";
import { TasksContext } from "./tasks-context";

export const useTasks = () => {
  const tasksObject = useContext(TasksContext);

  if (!tasksObject) {
    throw new Error("task context must be used within a TasksProvider");
  }

  return tasksObject;
};
