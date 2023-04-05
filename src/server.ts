import { config } from "dotenv";
import app from "./app";
config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🔥 Back-end rodando na porta: http://localhost:${port}`);
  console.log(`💦 Acesse a documentação em:  http://localhost:${port}/api`);
});
