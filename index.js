const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

// listen to env PORT for production, otherwise go to 5000 for localhost. 
const PORT = process.env.PORT || 5000;
app.listen(PORT);