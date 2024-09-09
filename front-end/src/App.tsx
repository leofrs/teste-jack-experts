import { useContext } from "react";
import { UserContext } from "./context/userContext";

import { RouterIndex } from "./routes/index.routes";

function App() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("ExampleComponent must be used within a UserProvider");
  }

  return <RouterIndex />;
}

export default App;
