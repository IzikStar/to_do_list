import type { FC } from "react";
import type { Task } from "../../types";

type TaskListProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  isFulfilled: boolean;
};

export const TaskList: FC<TaskListProps> = ({
  tasks,
  setTasks,
  isFulfilled,
}: TaskListProps) => {
  return <div></div>;
};
