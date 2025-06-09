import type { FC, ReactElement } from "react";
import { ListTypes } from "../../types";
import { useTasks } from "../../context";
import { Task } from "../task";
import { useModal } from "../../context";
import styles from "./task-list.module.css";
import { IconButton } from "../../components";

type TaskListProps = {
  type: ListTypes;
};

export const TaskList: FC<TaskListProps> = ({ type }: TaskListProps) => {
  const { tasks } = useTasks();
  const { openCreateMode } = useModal();

  const filteredTasks = tasks.filter((task) => task.type === type);

  const renderTasks = (): ReactElement[] => {
    return filteredTasks.map((task) => (
      <Task task={task} key={task.id} />
    ));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>{type}</div>

        <div className={styles.tasksContainer}>{renderTasks()}</div>

        {type === ListTypes.TODO && (
          <IconButton
            iconSrc="/src/assets/add-task-icon.svg"
            onClick={openCreateMode}
            className={styles.icon}
          />
        )}
      </div>
    </>
  );
};
