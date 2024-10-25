import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // create state varibale in class Based Component
    // this state is big object
    this.state = {
      count: 0,
      count2: 1,
      UserInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Default",
        bio: "Default",
      },
    };
    // console.log(props);
    console.log("Child Constructor");
  }
  async componentDidMount() {
    // console.log("Child ComponentDidMount");
    // Api Call
    const data = await fetch("https://api.github.com/users/mo-arman");
    const json = await data.json();
    console.log(json);

    this.setState({
      UserInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.props;
    const { count, count2 } = this.state;

    console.log("Child render");
    
    return (
      <div className="about">
        <img className="img" src={this.state.UserInfo.avatar_url} />
        <h1>Name:{this.state.UserInfo.name}</h1>
        <h2>Location:{this.state.UserInfo.location}</h2>
        <h2>Bio:{this.state.UserInfo.bio}</h2>
        <h3>Class Based Component</h3>
        <h2>Count:{count}</h2>
        <h2></h2>
        <h2></h2>
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
