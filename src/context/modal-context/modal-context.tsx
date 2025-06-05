import { createContext } from "react";
import type { Task } from "../../types";

export interface ModalContextType {
  isModalOpen: boolean;
  currentTask: Task | null;
  openCreateMode: () => void;
  openEditMode: (currentTask: Task) => void;
  uprroveCreation: (newTask: Task) => void;
  uprroveEdit: (newTask: Task) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);
