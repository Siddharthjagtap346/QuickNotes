const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRoutes = require('./routes/notes');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes); // 🆕

mongoose.connect('mongodb://mongo:27017/quicknotes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, '0.0.0.0', () => console.log('Server started on port 5000'));
