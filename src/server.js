const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: 'src/.env' });

mongoose.connect(process.env.MONGO_DB_CONNECTION,{

    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err)=>{
    if(err) throw err;
    console.log("MONGO VAREN DAW")
});


const app = express();
app.use(cors());
app.use(express.json());






// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

