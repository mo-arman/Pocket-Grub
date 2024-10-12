import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h2>OOPS! Somthing Wrong</h2>
      <h2>Unexpected Error</h2>
      <h3>404 Not Found</h3>
      <h3>Please Check the Internet Connection</h3>
      <div></div>
    </div>
  )
}

export default Error;
