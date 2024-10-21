const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth/auth-routes');

// create a database connection -> u can also 
// create a separate file for this and then import it here

mongoose.connect('mongodb+srv://admin:admin2024@cluster0.0nkbt.mongodb.net/').then(()=>{
    console.log('Connected to the database');
}).catch((err)=>{
    console.log('Connection failed');
    console.log(err);
});


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'Pragma', 'Expires', 'cache-control'],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use ('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));