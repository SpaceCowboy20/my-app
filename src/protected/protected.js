import { Navigate } from "react-router-dom";

const Protected = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
