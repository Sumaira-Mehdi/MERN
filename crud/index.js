import express from 'express';
import {router} from './Routes/routes.js';
const app = express();

app.set('view engine', 'ejs');

app.use('/virtual',express.static('public/css'))
app.use('/virtual',express.static('public/images'))
app.use(router);

app.listen(8080, ()=>{
    console.log("kjhjklhjkl")
});