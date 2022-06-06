import express from 'express';
import {router} from './Routes/routes.js';
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {MongoClient} from 'mongodb';
const urlencoded = bodyParser.urlencoded({extended : false });
const __dirname = dirname(fileURLToPath(import.meta.url));



const uri = "mongodb+srv://SumairaMehdi:urwabatool123@cluster0.dftlg8e.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//});
const app = express();
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('add');
});
app.post('/add',urlencoded,(req,res) => {
    console.log('inside add');
    client.connect(async (err)=> {
        if (err) throw err;
        const usercollection = client.db('myDB').collection('UsersCollection');
        await usercollection.insertOne(req.body, (err,result)=> {
            if (err) throw err;
            res.redirect('/');
        })
    })
})

app.use('/virtual',express.static('public/css'))
app.use('/virtual',express.static('public/images'))
app.use(router);

app.listen(8000, ()=>{
    console.log("kjhjklhjkl")
});

