const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get("/lab/:id", (req, res) => {
//     const fileName = `lab${req.params.id}.html`;
//     res.sendFile(path.join(__dirname, 'public', fileName), err => {
//         if (err) {
//             res.status(404).send('Lab not found');
//         }
//     });
// });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
