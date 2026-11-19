const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

const blockedPaths = new Set([
  '/server.js',
  '/package.json',
  '/package-lock.json',
  '/metadata.json',
]);

app.use((req, res, next) => {
  if (blockedPaths.has(req.path) || req.path.startsWith('/.')) {
    return res.status(404).end();
  }
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname, { index: 'index.html' }));

app.listen(PORT, HOST, () => {
  console.log(`FocusTube running at http://${HOST}:${PORT}`);
});
