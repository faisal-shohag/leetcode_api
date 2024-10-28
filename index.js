const express = require('express')
const app = express();
const cors = require('cors')
const path = require('path');
app.use(express.static('public'));

app.use(cors({
    origin: '*'
}))

let leet = require('./leetcode');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/:id', leet.leetcode);

app.listen(3000, () => {
    console.log(`App is running on port 3000`);
});