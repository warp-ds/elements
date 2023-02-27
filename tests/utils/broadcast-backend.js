import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/single-broadcast', (req, res) => {
  res.json([{ id: '100383', message: 'Testing' }]);
});

app.get('/multiple-broadcasts', (req, res) => {
  res.json([
    { id: '100383', message: 'Testing 1' },
    { id: '100384', message: 'Testing 2' },
  ]);
});

app.get('/scripts/index.js', (req, res) => {
  res.sendFile(new URL('../../dist/index.js', import.meta.url).pathname);
});

app.get('/scripts/api.js', (req, res) => {
  res.sendFile(new URL('../../dist/api.js', import.meta.url).pathname);
});

app.listen(4053);
