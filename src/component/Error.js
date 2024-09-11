import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h2>OOPS! Somthing Wrong</h2>
      <h2>Unexpected Error</h2>
      <h3>404 Not Found</h3>
    </div>
  )
}

export default Error;
