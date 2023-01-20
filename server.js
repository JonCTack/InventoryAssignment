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


app.post("/create_items", async (req, res) => {
    let returnedVal = await TheItems.create({
        name: req.body.nameString,
        price: req.body.priceNum,
        inventory: req.body.invNum,
        nextDelivery: req.body.dateVal,
        deliveryAmt: req.body.deliveryNum
    })
    console.log(returnedVal)
    res.send(returnedVal)
})

app.get('/items', async (req, res)=>{
    let response = await TheItems.find({});
    res.json(response)
})

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`)
});