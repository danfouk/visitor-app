// server.js - Initializes and starts the HTTP server.

const http = require('http');
const app = require('./app'); // Import the Express app
const config = require('./config/app'); // Load app configuration (port, etc.)
const logger = require('./utils/logger'); // Assuming a logger utility exists

// Create HTTP server.
const server = http.createServer(app);

// Get port from environment and store in Express.
const port = config.port || 3000; // Default to 3000 if not set
app.set('port', port);

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  logger.info(`Server listening on ${bind}`);
}

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

module.exports = server; // Export server for potential testing or other uses