import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";

const server = async () => {
  const PORT = 3000;
  await createConnection();
  await app.listen(PORT);
  console.log("hello on " + PORT);
};
server();
