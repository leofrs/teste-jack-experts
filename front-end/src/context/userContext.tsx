import React, { createContext, useState, ReactNode, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (user: boolean) => void;
  navigate: NavigateFunction;
}

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},

  isAuthenticated: false,
  setIsAuthenticated: () => {},
  navigate: () => {},
};
const UserContext = createContext(defaultUserContext);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
