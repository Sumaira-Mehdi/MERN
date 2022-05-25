import express from 'express';
import fetch from 'node-fetch';
const app = express();
const PORT = 8080;

app.get('/conversion/:number', (req,res) => {
    const myUrl = "https://v6.exchangerate-api.com/v6/15fba9b3458d5ac9c966b0e1/latest/USD";
     const dollar = req.params.number;
     console.log(dollar);

     const apiUrl = fetch(myUrl)
     .then(response => response.json())
     .then(data => {
         let rate = data;
         console.log(rate.conversion_rates);
         console.log(rate.conversion_rates.PKR * dollar)
     })

})
app.listen(PORT);