import { useEffect, useState } from "react";
import { Test } from "../utils/typs";

export const useGetData = (id: string) => {
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [result, setResult] = useState<Test | null>(null);

  useEffect(() => {
    setIsFetch(true)
    fetch(`http://localhost:3100/tests/${id}`, {
      method: 'GET'
    }).then((res) => {
      if(res.status >= 200 && res.status < 300 && res.ok){
        return res.json()
      } else {
        throw new Error('Ошибка ответа сервера');
      }
    }).then((data) => {
      setResult(data)
      setIsFetch(false)
    }).catch((err) => {
      setIsFetch(false)
      setError(err)
    })
  }, []);

  return { result, error, isFetch };
}