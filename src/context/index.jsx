//create the context 
import { useState } from "react";
import { createContext } from "react";


export const GlobalContext=createContext(null)

//create the global state that receive components as a children

function GlobalState({children}){

  const [theme,setTheme]=useState('light');
  function handleChangeThemeOnButtonClick(){
    setTheme(theme==="light"?"dark":"light")
  }


  return <GlobalContext.Provider value={{theme,handleChangeThemeOnButtonClick}}>{children}</GlobalContext.Provider>
}

export default GlobalState;
