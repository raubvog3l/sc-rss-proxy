const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', async (req, res) => {
  const response = await fetch('https://status.robertsspaceindustries.com/history.rss', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Accept': 'application/rss+xml',
    },
  });

  const body = await response.text();
  res.set('Content-Type', 'application/rss+xml');
  res.send(body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
