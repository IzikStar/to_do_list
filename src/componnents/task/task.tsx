import type { FC } from "react";
import type { Task as TaskType } from "../../types";
import { useModal } from "../../context/modal-context";

type TaskProps = {
  task: TaskType;
};

export const Task: FC<TaskProps> = ({ task }: TaskProps) => {
  const { openEditMode } = useModal();

  return <div></div>;
};
