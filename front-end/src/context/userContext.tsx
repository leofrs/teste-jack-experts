import React, { createContext, useState, ReactNode } from "react";

interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  userLogin: boolean;
  setUserLogin: (user: boolean) => void;
  userRegister: boolean;
  setUserRegister: (user: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [userLogin, setUserLogin] = useState<boolean>(false);
  const [userRegister, setUserRegister] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        setUserLogin,
        userRegister,
        setUserRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
