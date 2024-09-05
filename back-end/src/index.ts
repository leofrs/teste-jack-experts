import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors);
app.use(express.json());

function calbackServer() {
  console.log(`Server running on PORT: ${PORT}`);
}
app.listen(PORT, calbackServer);
