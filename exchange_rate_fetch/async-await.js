import express from 'express';
import fetch from 'node-fetch';
const app = express();
const PORT = 8080;

//creating server.
app.get('/conversion/:number', async (req,res) => {
    //exchange rate API.
    const myUrl = "https://v6.exchangerate-api.com/v6/15fba9b3458d5ac9c966b0e1/latest/USD";
    const dollar = req.params.number;
    console.log(dollar);
    
//using async/await.
     const conversion = async () => {
             //Fetching Api.
             const response = await fetch(myUrl);
             let rates = await response.json();
             //console.log(rates);
             let data = rates.conversion_rates;
                //console.log(data)
             let amt = data.PKR * dollar
             console.log(amt);
     }
    
    let result = await conversion();
    res.end(result)
         
})
app.listen(8080);

