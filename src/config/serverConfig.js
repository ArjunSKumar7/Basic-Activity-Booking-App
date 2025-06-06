import { Server } from "http";
import { configKeys } from "./keys.js";

const serverConfig = (server) => {
  const startServer = () => {
    const port = parseInt(configKeys.PORT, 10);
    server.listen(port, "0.0.0.0", () => {
      console.log(`Server started on http://localhost:${configKeys.PORT}`);
    });
  };
  return startServer();
};
export default serverConfig;
