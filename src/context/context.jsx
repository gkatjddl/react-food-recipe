import { createContext, useState } from 'react'
import './context.css'

export const GlobalContext = createContext(null);

// 리덕스 대신에 전역적으로 사용할 state (index.js 에서 App컴포넌트를 감싸줘야함)
export default function GlobalState({children})
{
  // 검색값
  let[searchParam, setSearchParam] = useState("");
  // 음식리스트
  let[foodList, setFoodList] = useState([]);
  // 음식 상세 데이터
  let[foodDetailList, setFoodDtailList] = useState(null);
  // 즐겨찾기 등록 리스트
  let[favoritesList,setFavoritesList] = useState([]);

  // 제공할 함수
  // 검색을 하면 검색명으로 get요청
  async function hSubmit(event){
    try
    {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
      const information = await res.json();    // REST API는 JSON문자열로전달하기 떄문에 사용할수있는 자료형으로 변경
      console.log(information)
      if(information?.data.recipes){
        setFoodList(information?.data.recipes);
        setSearchParam('');
      }
    }catch(e){
      console.log(e);
    }
  }

  return(
    <GlobalContext.Provider value={{searchParam,setSearchParam,foodList,setFoodList,foodDetailList,setFoodDtailList,favoritesList,setFavoritesList,hSubmit}}>
      {children}
    </GlobalContext.Provider>
  )
}