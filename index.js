require('dotenv').config()
const express = require('express');

const app = express();

app.get('/foo', (req, res) => {
  res.json({ env: "" + process.env.BAR, msg: 'route foo works' });
})

app.get('/', (req, res) => {
  res.send('main url works');
})

app.listen(4000, () => {
  console.info('server started 🚀')
});