import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { TasksProvider } from "./context/tasks-context";
import { ModalProvider } from "./context/modal-context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TasksProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </TasksProvider>
  </StrictMode>
);
