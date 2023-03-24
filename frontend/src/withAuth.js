// Wrap components with function to block non-users from seeing them

const withAuth = (Component) => {
  const AuthComponent = (props) => {
    const isAuthenticated = false // check if the user is logged in
                                 // replace with something from actual Auth libary

    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return (
        <div>
            <p>Please sign in to view this page.</p>
        </div>
      );
    }
  };

  return AuthComponent;
};

export default withAuth;