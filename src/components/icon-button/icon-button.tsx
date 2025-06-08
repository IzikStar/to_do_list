import type { FC } from "react";
import styles from "./icon-button.module.css";

type IconButtonProps = {
  iconSrc: string;
  onClick: () => void;
  className: CSSModuleClasses[string];
};

export const IconButton: FC<IconButtonProps> = ({
  iconSrc,
  onClick,
  className
}: IconButtonProps) => {
  return (
    <button className={className + " " + styles.button} onClick={onClick}>
      <img src={iconSrc} />
    </button>
  );
};
