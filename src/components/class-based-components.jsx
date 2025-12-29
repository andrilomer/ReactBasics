import { Component } from "react"

class ClassBasedComponents extends Component {

  componentDidMount(){
    // console.log("This is called for the first time after initial render");

    this.setState({
      showText:!this.state.showText,
      changeColor:!this.state.changeColor
    })
  
  }

  componentDidUpdate(prevProps,prevState){

    // console.log(prevProps,prevState)
    console.log(prevState,this.state);

    if(prevState && prevState.count!==this.state.count && this.state.count===10){
      this.setState({
        ...this.state,
        changeCountStyle:true
      })
    }
    

  }

  componentWillUnmount(){
    console.log("The component is getting destroyed");
  }
  
  // constructor(props){
  //   super(props)

  //   this.state={
  //     showText:false
  //   }
  // }

  state={
    showText:false,
    changeColor:false,
    count:0,
    changeCountStyle:false
  };

  handleClick=()=>{
    // console.log("button clicked");
    //this is not recommended because it will directly mutate the state 
    //  but would not re render the page 
    // this.state.showText=!this.state.showText

    const {showText,changeColor}=this.state

    this.setState({
      showText:!showText,
      changeColor:!changeColor
    });
  };


  // we cannot write methods like this inside classes 
  //we have to follow the arrow methods 
  // function handleCount(){
  //   this.setState({
  //     ...this.state,
  //     count:this.state.count+1
  //   });
  // }


  handleCount=()=>{
    this.setState({
      ...this.state,
      count:this.state.count+1
    })
  }



  render(){
    // console.log(this.state);
    const {showText,changeColor,count,changeCountStyle}=this.state
    // console.log("Component rendered")

    console.log(changeCountStyle);
    
    
    return (
    <div>
      {
        showText?
        <h2 style={{color:changeColor?'red':'blue'}}>Class based component</h2>
        :null
      }
      <button onClick={this.handleClick}>Toggle text</button>
      <button onClick={this.handleCount}>Increase Count Value</button>
      <h1 style={{color:changeCountStyle?'blue':'black',fontSize:changeCountStyle?'30px':'12px'}}>Count is {count}</h1>

    </div>
    )
  }
}

export default ClassBasedComponents