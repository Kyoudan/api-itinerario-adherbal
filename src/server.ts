import { config } from "dotenv";
import { app, boostrapStart } from "./app";
import { green, cyan, magenta } from "colorette";
config();

boostrapStart();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log("-------------------------------------------------------------");
  console.log(" ");
  console.log(
    `🔥 Back-end rodando na porta: ${green(`http://localhost:${port}`)}`
  );
  console.log(
    `💦 Acesse a documentação em:  ${cyan(`http://localhost:${port}/api`)}`
  );
  console.log(
    `💫 Acesse o Apollo server em:  ${magenta(
      `http://localhost:${port}/graphql`
    )}`
  );
  console.log(" ");
  const address = server.address();
  if (address && typeof address !== "string") {
    const { address: ip, port } = address;
    if (ip.length > 4) {
      console.log(`Server running at http://${ip}:${port}/`);
      console.log(" ");
    }
  }
  console.log("-------------------------------------------------------------");
});
