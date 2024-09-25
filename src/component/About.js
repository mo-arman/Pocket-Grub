import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
  constructor(){
    super();
    console.log("parent constructor")
  }
  componentDidMount(){
    console.log("parent componentDidMount");
  }
  render(){
    console.log("parent render");
    return(
      <div>
      <UserClass name={"Mohammad (class)"} location={"Sitapur class"}/>
      {/* <UserClass name={"Khan"} location={"Sitapur"}/> */}
    </div>
    )
  }
}

export default About;
