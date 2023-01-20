const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
let TheItems = require('./models/item.js')

port = 5000;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.easzlik.mongodb.net/Inventory?retryWrites=true&w=majority`


mongoose.set('strictQuery', false);
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


app.post("/create_items", (req, res) => {
    console.log(req.body)
    TheItems.create(req.body)
    res.send("creation successful")
})

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`)
});