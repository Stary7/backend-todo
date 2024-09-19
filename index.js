const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');
const cors = require('cors');
// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize express app
const app = express();
app.use(cors()); // Use CORS middleware
// Middleware for parsing JSON
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
