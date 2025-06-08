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

  const markTaskAsDone = () => {
    changeTaskState(task, ListTypes.DONE);
  };
  
  const markTaskAsUndone = () => {
    changeTaskState(task, ListTypes.TODO);
  };

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
                className={styles.icon}
                onClick={() => openEditMode(task)}
              />
            )}
          </div>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{task.description}</p>
          </div>

          <div className={styles.dueTimeContainer}>
            <p className={styles.dueTime}>{task.dueTime.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {task.type === ListTypes.TODO ? (
        <div className={styles.actions}>
          <IconButton
            iconSrc="/src/assets/mark-task-as-done-icon.svg"
            onClick={markTaskAsDone}
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
            onClick={markTaskAsUndone}
            className={styles.icon}
          />
        </div>
      )}
    </div>
  );
};
