import { useState } from "react";


const User = ({name,location}) => {
    // create state variable
    const [count] = useState(0);
  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>Location:{location}</h2>
      <h3>Functional Component</h3>
      <h2>Count:{count}</h2>
    </div>
  )
}

export default User;
