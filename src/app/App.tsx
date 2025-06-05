import styles from "./App.module.css";
import { ListTypes } from "../types";
import { TaskList } from "../componnents/task-list";
import { useModal } from "../context/modal-context";

export const App = () => {
  const { isModalOpen } = useModal();

  return (
    <div className={styles.body}>
      <header className={styles.header}>To-Do List</header>

      <section>
        <TaskList type={ListTypes.TODO} />
        <TaskList type={ListTypes.DONE} />
      </section>

      {isModalOpen && <></>}
    </div>
  );
};
