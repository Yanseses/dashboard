import { Status, Test } from '../../../utils/typs';
import styles from './component.module.css';
import { FC, memo, useEffect, useState } from "react";
import { TTextColor, Text } from '../../Text/Text';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button/Button';

export const Component: FC<Test> = memo(({ id, name, type, status, siteId }) => {
  const navigate = useNavigate();
  const [site, setSite] = useState<string>(siteId.url);

  const handleClick = () => {
    navigate(status === Status.DRAFT ? `/finalize/${id}` : `/results/${id}`)
  }

  useEffect(() => {
    if(site.includes('https://')){
      setSite(site.split('https://')[1])
    }
    if(site.includes('http://')){
      setSite(site.split('http://')[1])
    }
    if(site.includes('www')){
      setSite(site.split('www.')[1])
    }
  }, [site]);

  return (
    <li 
      key={id}
      className={styles.component} 
      style={{ borderLeft: `4px solid var(--status-color-${status.toLowerCase()})` }}
      >
      <Text>{name}</Text>
      <Text>{type}</Text>
      <Text color={status.toLowerCase() as TTextColor}>{status.split('')[0] + status.toLowerCase().slice(1)}</Text>
      <Text>{site}</Text>
      <Button 
        onClick={handleClick}
        className={status === Status.DRAFT ? styles.finalize : styles.results}>
          {status === Status.DRAFT ? 'Finalize' : 'Results'}
      </Button>
    </li>  
  )
})