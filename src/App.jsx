import user from "./user.jsx";
import User from "./user.jsx";
import Probsrest from "./UserDestructuringProbs.jsx"

function App()
  {
    const userData =
    {
      name:"Chitty", 
      age:25,
      phone:"123456",
      email:"chit@gmail.com",
    };

    const newuserData = {...userData,gender:"Male",age:30}

    return  (      
    <>
      <center>
        <h1>App</h1> <br/> 
        {/* <h2>This is an example for defining muultiple tag.</h2> 
        <h2>This is an example of using the frament tag</h2> */}
      </center>
      <User name={userData.name}
            age={userData.age}
            phonenumber = {userData.phone}
            emailid={userData.email}
            />
        {/* Sending userObject properties one by one to the other component.
        
        <Probsrest 
        Username={userData.username} 
        age={userData.age}/>*/}

        {/* Sending the userData object properties using spread operator. */}
        <Probsrest {...newuserData}/>

      </>
      
    );
  }

function Helloworld()
  {
    return <h1>Helloworld</h1>
  }

  export {Helloworld,App,Propconcept}

  function Propconcept(params) {
    return <h1>Prop concept</h1>
  }