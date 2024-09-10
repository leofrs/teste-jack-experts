import React, { createContext, useState, ReactNode, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Task {
  descricao: string;
  id: number;
  name: string;
  title: string;
  isChecked: boolean;
  authorId: number;
}

interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  navigate: NavigateFunction;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  navigate: () => {},
  tasks: [],
  setTasks: () => {},
};

const UserContext = createContext<UserContextType>(defaultUserContext);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
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
        tasks,
        setTasks,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
