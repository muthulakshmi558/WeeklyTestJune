const withRoleGuard = (WrappedComponent, allowedRole) => {
  return function RoleProtectedComponent(props) {
     const userRole = localStorage.getItem("role");
    console.log("👮 Checking role:", userRole); 

    if (userRole !== allowedRole) {
      return <h2 className="text-danger">❌ Access Denied</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withRoleGuard;
