const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.json({ message: "Hello from backend API" });
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
