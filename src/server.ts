import { config } from "dotenv";
import { app, boostrapStart } from "./app";
config();

boostrapStart();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🔥 Back-end rodando na porta: http://localhost:${port}`);
  console.log(`💦 Acesse a documentação em:  http://localhost:${port}/api`);
  console.log(`💫 Acesse o Apollo server em:  http://localhost:${port}/graphql`);
});
