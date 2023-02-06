const express = require('express');
const app = express();
const sharp = require('sharp');
const port = 3000

app.get('/', (req, res) => {
    res.send('Resize an image with a POST request body containing image and dimensions!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
