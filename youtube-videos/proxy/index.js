const express = require("express");
const app = express();

app.get('/*', (req, res) => {
    res.redirect("https://sad-curran-fd1f96.netlify.app");
})
app.listen(4001, console.log("listening"));