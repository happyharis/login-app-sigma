import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  // export default function RequireAuth({ children = <Dashboard /> }) {
  const token = useContext(AuthContext).token;
  // if token is falsey meaning null, that means user not logged in
  if (!token) return <Navigate to="/login" replace />;
  return children;
}
