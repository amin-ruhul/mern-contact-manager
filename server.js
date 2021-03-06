const express = require("express");
const app = express();
const dbConnection = require("./config/db");
const path = require("path");

app.use(express.json());
dbConnection();

app.use("/api/user", require("./router/userRouter"));
app.use("/api/auth", require("./router/authRouter"));
app.use("/api/contacts", require("./router/contactsRouter"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
