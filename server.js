const express = require("express");
const app = express();
require("dotenv").config();

app.get('/api/get', (req, res) => {
    res.send({ message: "hello back to nodejs" });
});

app.get('/api/get_user_details', (req, res) => {
    res.send({
        user: {
            name: "shashank",
            age: 21,
            contact: 12254
        },
        env: process.env.NAME
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});
