import { ISortState } from "../components/ComponentsList/ComponentsList";
import { Test } from "./typs";

export const sortList = (data: Test[], name: string, state: ISortState, setState: any) => {
  let sortedArr = data.sort((a: Test, b: Test) => {   
    if (a[name as keyof Test] < b[name as keyof Test]) {
      return state.name ? -1 : 1;
    }
    if (a[name as keyof Test] > b[name as keyof Test]) {
      return state.name ? 1 : -1;
    }
    return 0;
  });
  setState({...state, name: !state.name})

  return sortedArr;
}