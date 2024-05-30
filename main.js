const express = require('express');
const path = require('path');
const app = express();

// Serve the pair.html file when users visit the /pair endpoint
app.get('/pair', (req, res) => {
  res.sendFile(path.join((__dirname, 'pair.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
