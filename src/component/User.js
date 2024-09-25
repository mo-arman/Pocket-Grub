import { useState } from "react";


const User = ({name,location}) => {
    // create state variable
    const [count,setCount] = useState(0);
  return (
    <div className="about">
      <h1>Name:{name}</h1>
      <h2>Location:{location}</h2>
      <h3>Functional Component</h3>
      <h2>Count:{count}</h2>
      <button onClick={()=>{
        setCount(count+1);
      }}>Count Increase</button>
    </div>
  )
}

export default User;
