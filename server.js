const express = require("express");
const app = express();

const PORT = process.env.port || 5000;

app.use("/api/users", require("./router/usersRouter"));
app.use("/api/auth", require("./router/authRouter"));
app.use("/api/contracts", require("./router/contractsRouter"));

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
