import { Navigate } from "react-router-dom";

function ProtectedLayout(props) {
  // const isAuth = userFromRedux !== null;

  // if (!isAuth) return <Navigate to={"/login"} />;

  return <div>{props.children}</div>;
}

export default ProtectedLayout;
