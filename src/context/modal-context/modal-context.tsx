import { createContext } from "react";
import type { Task } from "../../types";

export interface ModalContextType {
  isModalOpen: boolean;
  currentTask: Task | null;
  openCreateMode: () => void;
  openEditMode: (currentTask: Task) => void;
  approveCreation: (newTask: Task) => void;
  approveEdit: (newTask: Task) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);
