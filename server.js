require('dotenv').config();

const http = require('http');
const app = require('./index');  // Your app logic, e.g., Express app

const server = http.createServer(app);

// Set a fallback port if .env doesn't provide one
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
