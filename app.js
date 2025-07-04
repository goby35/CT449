const express = require('express');
const cors = require('cors');
// Theem o buoc 6
const ApiError = require('./app/api-error');

// Theem o buoc 5
const contactRouter = require('./app/routes/contact.route');

const app = express();

app.use(cors());
app.use(express.json());

// Theem o buoc 5
app.use('/api/contacts', contactRouter);

// Theem o buoc 6
app.use((req, res, next) => {
    // Code ở đây sẽ chay khi không có route nào khớp
    // với yêu cầu của người dùng
    return next(new ApiError(404, 'Resource not found'));
});
// Theem o buoc 6
//Define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application' });
});

module.exports = app;