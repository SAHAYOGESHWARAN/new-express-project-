const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;
