import { useState,useEffect } from "react"
import ProductItem from "./components/product-item"
import "./styles.css"



function ProductList({listOfProducts}){

  const [flag,setFlag]=useState(false);
  const [count,setCount]=useState(0)
  const [changeStyle,setChangeStyle]=useState(false)
  
  useEffect(()=>{
    console.log("run only once after page load");

    return ()=>{
      // this is a cleanup function and we can also do some side effect here  
    }
    
  },[])

  function handleToggleText(){
    setFlag(!flag)
  }

  function handleIncreaseCount(){
    setCount(count+1);
  }

  useEffect(()=>{
    // console.log("count got changed");
    if(count===10){
      // console.log("UseEffect got called")
      setChangeStyle(true);
      console.log(changeStyle);
    }
  },[count])

  console.log("Curr State"+changeStyle);

  // function renderText(flag){
  //   return (flag?
  //     <h4>Hello from rendering</h4>
  //     :<h4>Hello from not rendering</h4>
  //   )
  // }

  console.log("Page rendered");
  
  return <div>
    <h3 className="title">E-Commerce Products </h3>

    {/* {renderText(flag)} */}
    
    <button onClick={handleToggleText}>Toggle Flag</button>
    {
      flag?
      <h4>Hello from the useState hook</h4>
      :
      <h3>Hello from the flag value:false</h3>
    }

    <div>
      <button onClick={handleIncreaseCount}>Increase Count</button>
      <p>Count is {count}</p>
    </div>

    {
      listOfProducts.map((item,index)=>{
        return <ProductItem key={index} product={item}/>
      })
    }

  </div>
}


export default ProductList