import { useState, type FC, type FormEvent } from "react";
import { useModal, useTasks } from "../../context";
import { ListTypes, type Task } from "../../types";
import style from "./task-modal.module.css";
import { IconButton } from "../../components";

export const TaskModal: FC = () => {
  const { currentTask, approveCreation, approveEdit, abort } = useModal();
  const { tasks } = useTasks();
  const [title, setTitle] = useState<Task["title"]>(currentTask?.title ?? "");
  const [description, setDescription] = useState<Task["description"]>(
    currentTask?.description ?? ""
  );
  const [dueTime, setDueTime] = useState<Task["dueTime"] | null>(
    currentTask?.dueTime ?? null
  );

  const handleAprrove = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newTask: Task;

    if (currentTask) {
      newTask = { ...currentTask, title, description, dueTime: dueTime! };
      approveEdit(newTask);
    } else {
      newTask = {
        id: tasks.length,
        title,
        description,
        dueTime: dueTime!,
        type: ListTypes.TODO,
      };
      approveCreation(newTask);
    }
  };

  return (
    <div className={style.closer} onClick={abort}>
      <div
        className={style.main}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h1 className={style.header}>{currentTask ? "Edit" : "Add"} Task</h1>
        <IconButton
          iconSrc="/src/assets/close-modal-icon.svg"
          className={style.closeIcon}
          onClick={abort}
        />
        <form onSubmit={handleAprrove} className={style.form}>
          <label className={style.label}>Task name:</label>
          <input
            className={style.input}
            type="text"
            id="title"
            name="title"
            placeholder="name"
            required
            maxLength={30}
            defaultValue={currentTask?.title ?? ""}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label className={style.label}>Task description:</label>
          <textarea
            className={style.input + " " + style.textarea}
            id="description"
            name="description"
            placeholder="description"
            defaultValue={currentTask?.description ?? ""}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label className={style.label}>Task due time:</label>
          <input
            className={style.input}
            type="datetime-local"
            id="due-time"
            name="due-time"
            defaultValue={dueTime?.toISOString().slice(0, 16)}
            required
            min={new Date().toISOString().slice(0, 16)}
            onChange={(event) => setDueTime(new Date(event.target.value))}
          />

          <button type="submit" className={style.submitButton}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
