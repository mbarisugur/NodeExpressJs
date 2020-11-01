const express = require('express');
const User = require('./Model/UserModel');
require('./Database/databaseConnection');
const app = express();
//Routes
const userRouter = require('./Router/userRouter');

app.use(express.json());

app.get('/',async (req,res)=>{
    const allUsers = await User.find({});
    res.json(allUsers);
});

app.post('/', (req,res) =>
 {res.status(200).json(req.body); 
});

app.use('/api/users',userRouter);

app.listen(3000, ()=> {
    console.log("3000 portundan server ayaklandırıldı.");
});