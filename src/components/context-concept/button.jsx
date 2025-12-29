import { GlobalContext } from "../../context"
import { useContext } from "react";

function ContextButtonComponent(){

  const {handleChangeThemeOnButtonClick}=useContext(GlobalContext);

  


  return (
    <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
  )
}

export default ContextButtonComponent