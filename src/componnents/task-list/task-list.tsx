import type { FC } from "react";
import { ListTypes, type Task as TaskType } from "../../types";
import { useTasks } from "../../context";
import { Task } from "../task";
import { useModal } from "../../context";
import styles from "./task-list.module.css";

type TaskListProps = {
  type: ListTypes;
};

export const TaskList: FC<TaskListProps> = ({ type }: TaskListProps) => {
  const { tasks } = useTasks();
  const { openCreateMode } = useModal();

  const filteredTasks = tasks.filter((task: TaskType) => task.type === type);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>{type}</div>
        {filteredTasks.map((task: TaskType) => (
          <Task task={task} />
        ))}

        {type === ListTypes.TODO && (
          <img
            src="/src/assets/add-task-icon.svg"
            onClick={openCreateMode}
            className={styles.icon}
          />
        )}
      </div>
    </>
  );
};
