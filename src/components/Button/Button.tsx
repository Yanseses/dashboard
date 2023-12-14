import styles from './button.module.css';
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IButton {
  className?: string;
  onClick?(): void
}

export const Button: FC<PropsWithChildren<IButton>> = ({ children, className, onClick }) => {
  const classes = classNames(
    className,
    styles.button
  )
  return (
    <button className={classes} onClick={onClick}>
      { children }
    </button>  
  )
}