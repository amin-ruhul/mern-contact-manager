const express = require("express");
const app = express();

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
