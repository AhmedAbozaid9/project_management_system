"use client";
import { useSession } from "next-auth/react";

import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      setUser(session.data?.user);
    } else {
      setUser(null);
    }
  }, [session]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
