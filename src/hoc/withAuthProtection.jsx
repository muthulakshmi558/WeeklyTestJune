import { Navigate } from "react-router-dom";

const withAuthProtection = (WrappedComponent) => {
  return function Protected(props) {
    const isAuthenticated = !!localStorage.getItem("user");

    if (!isAuthenticated) {
      alert("Please login to continue booking.");
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthProtection;
