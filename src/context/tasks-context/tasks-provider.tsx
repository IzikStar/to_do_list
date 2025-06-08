import { useState, type FC, type ReactNode } from "react";
import { TasksContext } from "./tasks-context";
import type { ListTypes, Task } from "../../types";

export const TasksProvider: FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: Task) => setTasks((prev) => [...prev, newTask]);

  const removeTask = (taskId: Task["id"]) =>
    setTasks((prev) =>
      prev
        .filter((task: Task) => task.id !== taskId)
        .map((task: Task, index: number) => {
          return { ...task, id: index };
        })
    );

  const editTask = (newTask: Task) =>
    setTasks((prev) =>
      prev.map((task: Task) => (task.id === newTask.id ? newTask : task))
    );

  const changeTaskState = (task: Task, newState: ListTypes) => {
    setTasks((prev) =>
      prev.map((currentTask: Task) =>
        currentTask.id === task.id ? { ...task, type: newState } : currentTask
      )
    );
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        editTask,
        changeTaskState,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
