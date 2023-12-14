import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import { FC } from "react";

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
}