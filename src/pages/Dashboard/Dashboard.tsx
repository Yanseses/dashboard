import styles from './dashboard.module.css';
import { FC } from "react";
import { Text } from "../../components/Text/Text";
import { ComponentsList } from '../../components/ComponentsList/ComponentsList';

export const Dashboard: FC = () => {
  return (
    <main className={styles.main}>
      <Text As="h1" textSize='26' color='default'>Dashboard</Text>
      <ComponentsList />
    </main>
  )
}