import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const Layout = ({ allowedroles = [] }) => {
  const location = useLocation();

  // Ensure localStorage data is safely parsed and set a default value
  const storedRoles = localStorage.getItem("roles");
  const parsedRoles = storedRoles ? JSON.parse(storedRoles) : { Roles: [] };

  const [roles, setRoles] = useState(parsedRoles);

  useEffect(() => {
    // Re-check localStorage in case roles are updated dynamically
    const updatedRoles = localStorage.getItem("roles");
    setRoles(updatedRoles ? JSON.parse(updatedRoles) : { Roles: [] });
  }, []);

  return (
    <article className="outlet">
      {
        Array.isArray(roles.Roles) && roles.Roles.some(role => allowedroles.includes(role))
          ? <Outlet />
          : <Navigate to="/form" state={{ from: location }} replace />
      }
    </article>
  );
};

export default Layout;
