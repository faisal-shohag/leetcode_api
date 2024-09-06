const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

let leet = require('./leetcode');
app.get('/', (req, res) => {
    res.send(`<p>To access the API, use </p><b>https://leetcode-api-faisalshohag.vercel.app</b>/<b style="color:crimson;">yourLeetcodeUsername</b>`)
});
app.get('/:id', leet.leetcode);

app.listen(3000, () => {
    console.log(`App is running on port 3000`);
});
