import { useContext, ReactElement } from "react";
import { AccessTokenContext } from "../../contexts/AccessTokenContext";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactElement;
};

/**
 * This will redirect the user to the login form if they haven't logged in.
 */
function ProtectedRoute({ children }: ProtectedRouteProps) {
  /**
   * If the user is logged in, the JWT token will be stored in the Context API.
   */
  const { hasToken } = useContext(AccessTokenContext);
  const isLoggedIn = hasToken();

  /**
   * If the user isn't logged in, redirect to the login form
   */
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  /**
   * If the user is logged in, return the child component
   */
  return children;
}

export default ProtectedRoute;
