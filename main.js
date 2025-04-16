require('dotenv').config();
const http = require('http');
const app = require('./app');
const PORT = process.env.APP_PORT || 3000;
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server initialized, running on 0.0.0.0:${PORT}`);
});