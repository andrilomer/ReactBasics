import { useReducer } from "react"


const initialState={
  showTextFlag:false,
  changeTextStyleFlag:false,
}

const hideText='hideText'
const showText='showText'
const changeTextStyle='changeTextStyle'

function reducer(state,action){

  // console.log(action.type)
  
  switch(action.type){
    case hideText:
      // console.log(state,action);

      return {
        ...state,
        showTextFlag:false
      }

    case showText:
      return {
        ...state,
        showTextFlag:true
      }

    case changeTextStyle:
      return {
        ...state,
        changeTextStyleFlag:!state.changeTextStyleFlag
      }

    default:
      return state;
  }
}


export default function UserReducerExample(){

  const [state,dispatch]=useReducer(reducer,initialState)

  console.log(state);
  // console.log(dispatch)
  
  



  return (
    <div>
      {
        state?.showTextFlag?
        <h3 style={{"backgroundColor":state.changeTextStyleFlag?'red':'blue'}}>Use reducer hook</h3>
        :null
      }
      

      <button onClick={()=>dispatch({type:hideText})}>Hide text</button>
      <button onClick={()=>dispatch({type:showText})}>Show text</button>
      <button onClick={()=>dispatch({type:changeTextStyle})}>Toggle text styles</button>
    </div>
  )
}
