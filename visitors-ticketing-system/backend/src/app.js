// app.js - Configures the Express application.

const express = require('express');
const path = require('path');
const logger = require('./utils/logger'); // Assuming a logger utility exists
const morgan = require('morgan'); // HTTP request logger middleware
const cors = require('cors'); // Middleware for enabling CORS
const helmet = require('helmet'); // Middleware for setting various security headers
const rateLimiter = require('./middleware/rateLimiter'); // Assuming rate limiter middleware
const errorHandler = require('./middleware/errorHandler'); // Assuming error handler middleware

// --- Route Imports (Placeholder - Add actual routes later) ---
// const authRoutes = require('./api/routes/auth');
// const visitorRoutes = require('./api/routes/visitors');
// ... other routes

// Create Express app
const app = express();

// --- Middleware Setup ---

// Security Middleware
app.use(helmet()); // Set security-related HTTP headers
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Request Logging
// Use 'combined' format for Apache-style logs, pipe through our logger
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Body Parsers
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Rate Limiting (Apply to all requests, or selectively later)
// app.use(rateLimiter); // Uncomment when rateLimiter is implemented

// --- API Routes ---
// Placeholder for root/health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Visitor Ticketing System API is running.' });
});

// Mount API routes (Uncomment and add as they are built)
// app.use('/api/auth', authRoutes);
// app.use('/api/visitors', visitorRoutes);
// ... other routes

// --- Error Handling ---

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Global error handler (Must be last middleware)
app.use(errorHandler); // Assuming errorHandler middleware handles logging and response

module.exports = app;