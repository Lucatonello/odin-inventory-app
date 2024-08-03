require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const itemsRouter = require('./routes/itemsRoute');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use('/', itemsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});