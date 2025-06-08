import { useContext } from "react";
import { ModalContext } from "./modal-context";

export const useModal = () => {
  const modalObject = useContext(ModalContext);

  if (!modalObject) {
    throw new Error("modal context must be used within a modalProvider");
  }

  return modalObject;
};
