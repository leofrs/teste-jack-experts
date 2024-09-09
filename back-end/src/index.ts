import express from "express";
import cors from "cors";
import { userRouter } from "./routes/User.Router";
import { tasksRouter } from "./routes/Tasks.router";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use(userRouter);
app.use(tasksRouter);

function calbackServer() {
  console.log(`Server running on PORT: ${PORT}`);
}
app.listen(PORT, calbackServer);
