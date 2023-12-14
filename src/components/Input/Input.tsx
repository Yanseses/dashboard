import { SearchIcon } from '../../media/Search';
import { Text } from '../Text/Text';
import styles from './input.module.css';
import { FC } from "react";

interface IInput {
  value: string;
  onChange(data: string): void;
  count: number;
}

export const Input:FC<IInput> = ({ value, onChange, count }) => {
  return (
    <label className={styles.label}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>
      <input 
        value={value} 
        onChange={(value) => onChange(value.target.value)} 
        className={styles.input}
        placeholder='What test are you looking for?'
      />
      <Text extraClass={styles.count} color='grey'>{`${count} Tests`}</Text>
    </label>
  )
}