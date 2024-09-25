import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <User name={"Mohammad"} location={"Sitapur"}/>
      <UserClass name={"Misba"} location={"Sitapur"}/>
    </div>
  )
}

export default About;
