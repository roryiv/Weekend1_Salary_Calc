const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.listen(PORT, function() {
    console.log(`listening on port: ${PORT}`);
});

