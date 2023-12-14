import { useNavigate, useParams } from 'react-router-dom';
import { Text } from '../../components/Text/Text';
import { useGetData } from '../../hooks/useGetData';
import styles from './finalize.module.css';
import { FC } from "react"

export const Finalize: FC = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const { result, isFetch, error } = useGetData(id || '1');

  const handleBackNavigate = () => {
    navigation(-1)
  }


  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Text As="h1" textSize='26' color='default'>Finalize</Text>
        { !isFetch && !error && result && (
          <Text color='default'>{result.name}</Text>
          ) 
        }
      </section>
      <Text extraClass={styles.button} onClick={handleBackNavigate}>Back</Text>
    </main>  
  )
}