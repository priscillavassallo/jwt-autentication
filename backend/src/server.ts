import * as express from "express";
import * as cors from "cors";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`);
});
