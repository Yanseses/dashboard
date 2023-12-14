import styles from './results.module.css';
import { Text } from '../../components/Text/Text';
import { FC } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useGetData } from '../../hooks/useGetData';

export const Results: FC = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const { result, isFetch, error } = useGetData(id || '1');

  const handleBackNavigate = () => {
    navigation(-1)
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Text As="h1" textSize='26' color='default'>Results</Text>
        {  }
        { !isFetch && !error && result && (
          <Text color='default'>{result.name}</Text>
          ) 
        }
      </section>
      <Text extraClass={styles.button} onClick={handleBackNavigate}>Back</Text>
    </main>  
  )
}