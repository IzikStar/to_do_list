import type { FC } from "react";
import type { ListTypes, Task as TaskType } from "../../types";
import { useTasks } from "../../context/tasks-context";
import { Task } from "../task";
import { useModal } from "../../context/modal-context";

type TaskListProps = {
  type: ListTypes;
};

export const TaskList: FC<TaskListProps> = ({ type }: TaskListProps) => {
  const { tasks } = useTasks();
  const { openCreateMode } = useModal();

  const filteredTasks = tasks.filter((task: TaskType) => task.type === type);

  return (
    <div>
      {filteredTasks.map((task: TaskType) => (
        <Task task={task} />
      ))}
    </div>
  );
};
