const cors = require('cors');
const express = require('express');
const app = express();
require('../database/db');
const authRoutes = require('./routes/authRoutes');
const taskRouter = require('./routes/taskRoutes');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

// Adding the route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API!');
});

// localhost:8080/auth/register

const port = 8080;

app.listen(port, () => {
  console.log(`server is running on port`, port);
});
