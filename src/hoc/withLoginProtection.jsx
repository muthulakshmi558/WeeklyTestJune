import { Navigate } from 'react-router-dom';

const withLoginProtection = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = !!localStorage.getItem('user');
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoginProtection;
