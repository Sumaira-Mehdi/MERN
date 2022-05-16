import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.use('/virtual',express.static('public/css'))
app.use('/virtual',express.static('public/images'))

app.get('/', function(_req, res) {
  res.render('index');
});

app.get('/register', function(_req, res) {
  res.render('register');
});

var user = [ 
  { id: 1, firstName : 'Sumaira', lastName :'Mehdi', phase : 2, topic : 'MERN'  }, 
  { id: 2, firstName : 'Sayeda', lastName :'Ali Asghar', phase : 2, topic : 'QA'  }, 
  { id: 3, firstName : 'Aamna', lastName :'Rashid', phase : 2, topic : 'PHP'  }, 
  { id: 4, firstName : 'Aasma', lastName :'Zeeshan', phase : 2, topic : 'WORDPRESS'  }
];
  
  
app.get('/user/:id', function(req, res) {
  res.render('user', {
    user: user.find(u => u.id==req.params.id)
    
  })
  //console.log(FOUND);
})
app.listen(8080);
console.log('Server is listening on port 8080');