const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const videoRoutes = require('./routes/videoRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/videos', videoRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
