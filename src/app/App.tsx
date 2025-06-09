import styles from "./App.module.css";
import { ListTypes } from "../types";
import { TaskList } from "../components";
import { useModal } from "../context";
import { TaskModal } from "../modals";

export const App = () => {
  const { isModalOpen } = useModal();

  return (
    <div className={styles.body}>
      <header className={styles.header}>To-Do List</header>

      <section className={styles.main}>
        <TaskList type={ListTypes.TODO} />
        <TaskList type={ListTypes.DONE} />
      </section>

      {isModalOpen && <TaskModal />}
    </div>
  );
};
