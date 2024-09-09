import { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const ProtectedLayout = () => {
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      if (!isAuthenticated) {
        navigate("/toDo-login");
      } else {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      checkAuth();
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="italic text-2xl">Carregando...</p>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedLayout;
