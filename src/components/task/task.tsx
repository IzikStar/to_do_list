import type { FC } from "react";
import { ListTypes, type Task as TaskType } from "../../types";
import { useModal, useTasks } from "../../context";
import styles from "./task.module.css";
import { IconButton } from "../icon-button";

type TaskProps = {
  task: TaskType;
};

export const Task: FC<TaskProps> = ({ task }: TaskProps) => {
  const { openEditMode } = useModal();
  const { removeTask, changeTaskState } = useTasks();

  const formatedDate: string =
    task.dueTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }) +
    ", " +
    task.dueTime.toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

  return (
    <div className={styles.taskContainer}>
      <div className={styles.rightContainer}>
        <img src="/src/assets/move-task-icon.svg" />

        <div className={styles.details}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>{task.title}</p>
            {task.type === ListTypes.TODO && (
              <IconButton
                iconSrc="/src/assets/edit-task-icon.svg"
                className={styles.editIcon}
                onClick={() => openEditMode(task)}
              />
            )}
          </div>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{task.description}</p>
          </div>

          <div className={styles.dueTimeContainer}>
            <p className={styles.dueTime}>{formatedDate}</p>
          </div>
        </div>
      </div>

      {task.type === ListTypes.TODO ? (
        <div className={styles.actions}>
          <IconButton
            iconSrc="/src/assets/mark-task-as-done-icon.svg"
            onClick={() => changeTaskState(task, ListTypes.DONE)}
            className={styles.icon}
          />
          <IconButton
            iconSrc="/src/assets/delete-task-icon.svg"
            onClick={() => removeTask(task.id)}
            className={styles.icon}
          />
        </div>
      ) : (
        <div className={styles.actions}>
          <IconButton
            iconSrc="/src/assets/mark-task-as-undone-icon.svg"
            onClick={() => changeTaskState(task, ListTypes.TODO)}
            className={styles.icon}
          />
        </div>
      )}
    </div>
  );
};
