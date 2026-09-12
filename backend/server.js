const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern_starter';

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('[Database] MongoDB connected'))
  .catch((err) => console.log('[Database] MongoDB connection error:', err.message));

// Base route
app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
