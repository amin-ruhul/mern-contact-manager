const express = require("express");
const app = express();
const dbConnection = require("./config/db");

const PORT = process.env.port || 5000;

app.use(express.json());
dbConnection();

app.use("/api/user", require("./router/userRouter"));
app.use("/api/auth", require("./router/authRouter"));
app.use("/api/contracts", require("./router/contractsRouter"));

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
