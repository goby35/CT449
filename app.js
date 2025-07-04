const express = require('express');
const cors = require('cors');

// Theem o buoc 5
const contactRouter = require('./app/routes/contact.route');

const app = express();

app.use(cors());
app.use(express.json());

// Theem o buoc 5
app.use('/api/contacts', contactRouter);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application' });
});

module.exports = app;