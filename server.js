console.log('server is running');

const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send({ fun: true });
});

app.listen(PORT, () => {
  console.log('app running at http://localhost:' + PORT);
})