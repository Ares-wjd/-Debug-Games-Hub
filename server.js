const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';

app.use(express.static(path.join(__dirname)));

app.post('/verify-password', (req, res) => {
  const { password } = req.body;
  if (!ADMIN_PASSWORD) {
    return res.status(500).json({ success: false, error: 'Password not configured' });
  }
  if (password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }
  return res.json({ success: false });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
