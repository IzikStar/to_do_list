import type { FC } from "react";
import type { ListTypes, Task } from "../../types";

type TaskListProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  type: ListTypes;
};

export const TaskList: FC<TaskListProps> = ({
  tasks,
  setTasks,
  type,
}: TaskListProps) => {
  return <div></div>;
};
