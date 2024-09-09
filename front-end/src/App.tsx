import { useContext } from "react";
import { UserContext } from "./context/userContext";

import HomeTaskPage from "./pages/HomeTaskPage";
import HomePage from "./pages/HomePage";

function App() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("ExampleComponent must be used within a UserProvider");
  }

  const { user } = context;
  return <>{user ? <HomeTaskPage /> : <HomePage />}</>;
}

export default App;
