const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/save-image', (req, res) => {
  const imageData = req.body.image.replace(/^data:image\/jpeg;base64,/, '');
  const filename = `image_${Date.now()}.jpg`;
  fs.writeFile(`\\\\ppp\\${filename}`, imageData, 'base64', (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

