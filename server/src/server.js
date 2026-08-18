import app from "./app.js";
import config from "./config/config.js";
import ConnectDB from "./config/db.js";

const port = config.PORT || 3000;

const startServer = async () => {
  await ConnectDB()
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startServer();
