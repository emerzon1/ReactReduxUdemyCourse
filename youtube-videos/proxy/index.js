const express = require("express");
const app = express();

app.get('/*', (req, res) => {
    res.redirect("file:///Users/evanmerzon/ReactReduxUdemyCourse/youtube-videos/build/index.html");
})
app.listen(4000, console.log("listening"));