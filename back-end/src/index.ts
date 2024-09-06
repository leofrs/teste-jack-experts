import express from "express";
import cors from "cors";
import { userRouter } from "./routes/User.Router";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});
function calbackServer() {
  console.log(`Server running on PORT: ${PORT}`);
}
app.listen(PORT, calbackServer);
