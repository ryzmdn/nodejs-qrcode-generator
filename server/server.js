const express = require('express');
const QRCode = require('qrcode');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/generated-qrcode", (req, res) => {
  const { url } = req.body;

  QRCode.toDataURL(url, (err, src) => {
    if (err) return res.status(500).send('Error occurred');
    res.send(`<img src="${src}" alt="Generated QR Code">`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
