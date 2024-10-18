const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const PORT = process.env.PORT || 3300;
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to the API!' });
});
// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB atlas connected'))
.catch((err) => console.log('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// module.exports = app;
