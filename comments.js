// Create web server
// 1. Create a web server
// 2. Serve up the public folder
// 3. Listen on the port 3000

const express = require('express');
const commentsRouter = require('./routes/comments');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/comments', commentsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
