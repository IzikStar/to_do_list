import { useState, type FC, type ReactNode } from "react";
import { ModalContext } from "./modal-context";
import type { Task } from "../../types";
import { useTasks } from "../tasks-context";

export const ModalProvider: FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const { addTask, editTask } = useTasks();

  const openCreateMode = () => {
    setIsModalOpen(true);
  };

  const openEditMode = (currentTask: Task) => {
    setCurrentTask(currentTask);
    setIsModalOpen(true);
  };
  
  const uprroveCreation = (newTask: Task) => {
    addTask(newTask);
    setIsModalOpen(false);
  };
  
  const uprroveEdit = (newTask: Task) => {
    editTask(newTask);
    setCurrentTask(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        currentTask,
        openCreateMode,
        openEditMode,
        uprroveCreation,
        uprroveEdit
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
