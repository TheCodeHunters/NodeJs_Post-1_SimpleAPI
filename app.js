const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'my first test route',
    status: 200
  })
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})