import { useState, type FC, type ReactNode } from "react";
import { TasksContext } from "./tasks-context";
import type { Task } from "../../types";

export const TasksProvider: FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: Task) => setTasks((prev) => [...prev, newTask]);

  const removeTask = (taskId: Task["id"]) =>
    setTasks((prev) => prev.filter((task: Task) => task.id !== taskId));

  const editTask = (newTask: Task) =>
    setTasks((prev) =>
      prev.map((task: Task) => (task.id === newTask.id ? newTask : task))
    );

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        editTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
