const express = require("express");
const path = require("path");
const app = express();
const port = 3000;


app.use(express.static(path.resolve(__dirname, '../CCT Web Platform')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../CCT Web Platform/index.html'));
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
