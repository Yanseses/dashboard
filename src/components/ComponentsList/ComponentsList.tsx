import styles from './componentsList.module.css';
import { FC, useCallback, useEffect, useState } from "react";
import { Component } from './Component/Component';
import { Text } from '../Text/Text';
import { Input } from '../Input/Input';
import { useGetList } from '../../hooks/useGetList';
import { Test } from '../../utils/typs';
import { sortList } from '../../utils/sort';
import { Button } from '../Button/Button';

export interface ISortState {
  name: boolean;
  type: boolean;
  status: boolean;
  site: boolean;
}

export const ComponentsList: FC = () => {
  const [sortState, setSortState] = useState<ISortState>({
    name: true,
    type: true,
    status: true,
    site: true
  });
  const [ listItems, setListItems ] = useState<Test[]>([]);
  const [ inputValue, setInputValue] = useState<string>('');
  const { result, isFetch, error } = useGetList();

  const handleFormReset = () => {
    setInputValue('')
  }

  const handleSearch = useCallback((data: string) => {
    setInputValue(data);
  }, []);

  const handleSort = (name: string) => {
    const newList = sortList(listItems, name, sortState, setSortState);
    setListItems(newList)
  }

  useEffect(() => {
    if(!isFetch && !error) setListItems(result)
  }, [result, error, isFetch]);

  useEffect(() => {
    let time = setTimeout(() => {
      let filterInput = result.filter((data) => data.name.toLowerCase().includes(inputValue.toLowerCase()));
      setListItems(filterInput)
    }, 500)

    return () => clearTimeout(time)
  }, [inputValue, result]);

  return (
    <section className={styles.section}>
      <Input value={inputValue} onChange={handleSearch} count={listItems.length}/>
      { isFetch && <div>Loading...</div> }
      { !isFetch && !error && result.length < 1 && <div>Data is Empty</div> }
      { !isFetch && !error && listItems.length < 1 && (
        <div className={styles.empty}>
          <Text textSize='26'>Your search did not match any results.</Text>
          <Button className={styles.reset} onClick={handleFormReset}>Reset</Button>
        </div>
        ) 
      }
      { !isFetch && !error && listItems.length > 0 && (
        <div className={styles.board}> 
          <div className={styles.head}>
            <Text color='draft' onClick={() => handleSort('name')} extraClass={styles.filter}>NAME</Text>
            <Text color='draft' onClick={() => handleSort('type')} extraClass={styles.filter}>TYPE</Text>
            <Text color='draft' onClick={() => handleSort('status')} extraClass={styles.filter}>STATUS</Text>
            <Text color='draft' onClick={() => handleSort('site')} extraClass={styles.filter}>SITE</Text>
          </div>
          <ul className={styles.data}>
            { listItems.map((element) => (
              <Component 
                key={element.id} 
                name={element.name} 
                id={element.id} 
                type={element.type} 
                status={element.status} 
                siteId={element.siteId} />
              )) 
            }
          </ul>
        </div>
        )  
      }
    </section>
  )
}