import styles from "./App.module.css";
import type { Task } from "../types";
import { useState } from "react";
import { TaskList } from "../componnents/task-list";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.body}>
      <header className={styles.header}>To-Do List</header>
      <section>
        <TaskList tasks={tasks} setTasks={setTasks} isFulfilled={false} />
        <TaskList tasks={tasks} setTasks={setTasks} isFulfilled={true} />
      </section>
      // modal
    </div>
  );
};
