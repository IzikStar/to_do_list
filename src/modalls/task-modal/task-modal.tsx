import { useState, type ChangeEvent, type FC } from "react";
import { useModal, useTasks } from "../../context";
import { ListTypes, type Task } from "../../types";
import style from "./task-modal.module.css";

export const TaskModal: FC = () => {
  const { currentTask, approveCreation, approveEdit, abort } = useModal();
  const { tasks } = useTasks();
  const [title, setTitle] = useState<Task["title"]>(currentTask?.title ?? "");
  const [description, setDescription] = useState<Task["description"]>(
    currentTask?.description ?? ""
  );
  const [dueTime, setDueTime] = useState<Task["dueTime"]>(
    currentTask?.dueTime ?? new Date()
  );

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleDueTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDueTime(new Date(event.target.value));
  };

  const handleAprrove = () => {
    let newTask: Task;

    if (currentTask) {
      newTask = { ...currentTask, title, description, dueTime };
      approveEdit(newTask);
    } else {
      newTask = {
        id: tasks.length,
        title,
        description,
        dueTime,
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
        <form onSubmit={handleAprrove} className={style.form}>
          <label className={style.label}>Task name:</label>
          <input
            className={style.input}
            type="text"
            id="title"
            name="title"
            placeholder="name"
            defaultValue={currentTask?.title ?? ""}
            onChange={handleTitleChange}
          />
          <label className={style.label}>Task description:</label>
          <input
            className={style.input}
            type="text"
            id="description"
            name="description"
            placeholder="description"
            defaultValue={currentTask?.description ?? ""}
            onChange={handleDescriptionChange}
          />

          <label className={style.label}>Task due time:</label>
          <input
            className={style.input}
            type="datetime-local"
            id="due-time"
            name="due-time"
            defaultValue={
              dueTime.toISOString().slice(0, 16)
            }
            onChange={handleDueTimeChange}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};
