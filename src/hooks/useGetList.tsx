import { useEffect, useState } from "react";
import { Test } from "../utils/typs";

export const useGetList = () => {
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [result, setResult] = useState<Test[]>([]);

  useEffect(() => {
    setIsFetch(true)
    fetch('http://localhost:3100/tests', {
      method: 'GET'
    }).then((res) => {
      if(res.status >= 200 && res.status < 300 && res.ok){
        return res.json()
      } else {
        throw new Error('Ошибка получения списка данных');
      }
    }).then((tests) => {
      return Promise.all(
        tests.map((item: Test) => 
          fetch(`http://localhost:3100/sites/${item.siteId}`, {
          method: 'GET'
        }).then((res) => {
          if(res.status >= 200 && res.status < 300 && res.ok){
            return res.json()
          } else {
            throw new Error('Ошибка получения сайта пользователя')
          }
        }).then((site) => {
          return { ...item, siteId: site }
        })))
    }).then((resul) => {
      setResult(resul)
      setIsFetch(false)
    }).catch((err) => {
      setIsFetch(false)
      setError(err)
    })
  }, []);

  return { result, error, isFetch };
}