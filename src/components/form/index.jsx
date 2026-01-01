import { useState } from "react";

function FormComponent() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData,setFormData]=useState({
    //this name and email are the same as the name property 
    // that is placed in both input tag one is name and other is email
    name:"",
    email:""
  })

  function handleInputChange(event) {
    // console.log(event)
    const { value } = event.target;
    // console.log(value)
    setNameValue(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setEmailValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //call API here and pass the nameValue here

    console.log(nameValue,emailValue, "nameValue");
  }

  function handleOnChange(event){
    const {name,value}=event.target;
    setFormData({
      ...formData,
      [name]:value  //here name is a dynamic value that would be name or email
    })
    
  }

  console.log(formData);
  

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          onChange={handleOnChange}
          name="name"
          id="name"
          placeholder="Enter your name"
          type="text"
        />
        <input
          type="email"
          value={formData.email}
          name="email"
          id="email"
          placeholder="Enter your mail"
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
