import { useContext } from "react";
import { UserContext } from "./context/userContext";

import { PrivateRouter } from "./routes/private.routes";
import { PublicRouter } from "./routes/public.routes";

function App() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("ExampleComponent must be used within a UserProvider");
  }

  const { user } = context;
  return <>{user ? <PrivateRouter /> : <PublicRouter />}</>;
}

export default App;
