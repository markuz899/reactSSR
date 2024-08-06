import React, { FC } from "react";
import { Navigate } from "react-router-dom";

// Definizione dei tipi per le props
interface RouteProps {
  component: any;
  shield?: boolean;
  path?: string;
  isAuth?: boolean;
  hidden?: boolean;
  data?: { [key: string]: any };
}

const Router: FC<RouteProps> = ({
  component: Component,
  shield,
  isAuth,
  hidden = false,
  data = {},
}) => {
  if (shield && !isAuth) {
    return <Navigate to="/login" />;
  }

  if (hidden) {
    return <Navigate to="/" />;
  }

  return <Component global={data} />;
};

export default React.memo(Router);
