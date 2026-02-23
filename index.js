const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('careerer code server is running.');
})
app.listen(port,()=>{
    console.log(`Career server is running at: http://localhost:${port}`);
})