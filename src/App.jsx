
import './App.css'
import ClassBasedComponents from './components/class-based-components'
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FormComponent from './components/form';
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import UserReducerExample from './components/use-reducer-example';
import Users from './components/users';



function App() {

  // const dummyProductData=['Product 1','Product 2','Product 3'];

  return (
    <div>
      <h1>React Js components </h1>
      {/* <ClassBasedComponents/> */}
      {/* <FunctionalComponent/> */}
      {/* <ProductList listOfProducts={dummyProductData}/> */}
      {/* <Users/> */}
      {/* <ContextButtonComponent/>
      <ContextTextComponent/> */}
      {/* <UserReducerExample/> */}
      <FormComponent/>

    </div>
  )
}

export default App
