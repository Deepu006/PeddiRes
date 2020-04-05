const express = require('express');
const itemRoute = require('./routes/api/items');
const orderRoute = require('./routes/api/orders');
const userRoute = require('./routes/api/users');
const connectDB = require('./config/connectDB');
const cors = require('cors');

const app = express();
app.use(cors());
//connect to db
connectDB();

//set a middleware to parse data
app.use(express.json());

app.use('/api/items', itemRoute);

app.use('/api/orders', orderRoute);

app.use('/api/user', userRoute);

app.listen(process.env.PORT);
