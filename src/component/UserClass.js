import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
   
    // create state varibale in class Based Component
    // this state is big object
    this.state = {
      count: 0,
      count2: 1,
    };
    // console.log(props);
    console.log("Child Constructor");
  }
  componentDidMount(){
    console.log("Child ComponentDidMount");
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log("Child render");
    return (
      <div className="about">
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <h3>Class Based Component</h3>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            // Never update state variable Directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Count:{count2}</h2>
      </div>
    );
  }
}
export default UserClass;
