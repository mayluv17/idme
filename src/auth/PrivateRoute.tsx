import React, { ReactNode, useEffect, useState } from "react";
import { supabase } from "../lib/api";
import { Navigate, useLocation } from "react-router-dom";
import { Session } from "@supabase/supabase-js";

interface ProtectedRouteProps {
  children: any;
  //   isLoggedIn: boolean | null;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(session);
      localStorage.setItem("session", JSON.stringify(session));
    });
  }, []);

  let location = useLocation();

  if (!isLoggedIn?.access_token.length) {
    <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
