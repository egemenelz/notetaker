const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const appiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));

// app.use('/api', appiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API SERVER NOW ON PORT ${PORT}`);
})