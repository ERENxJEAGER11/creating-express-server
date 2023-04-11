const express = require('express');  //import express
const app = express();  // create an instance of express
const port = 3000    //local port

const data = require('./data.json');   //import data

// define route and api


// login route  - get request
app.get('/login/:id/:pass', (req,res) => {
    const id = parseInt(req.params.id);
    const pass = req.params.pass === 'true';
  
    // Find the object in the JSON data with the matching id and pass fields
    const result = data.find(obj => obj.id === id && obj.pass === pass);
   
    if (result) {
      // Return the corresponding data if found
      res.json(result);
    } else {
      // Return an error message if not found
      res.status(404).send('404: Data not found');
    }
})

// sign-up route - post request

app.post('/SignUp/:id/:name/:age/:gender/:comment/:rating/:pass', (req,res) => {
  const person = {
    id: req.params.id,
    name: req.params.name,
    age: req.params.age,
    gender: req.params.gender,
    comment: req.params.comment,
    rating: req.params.rating,
    pass: req.params.pass
  }
    res.send(person);
})


// start http server
app.listen(port, () => {
    console.log('listening on port 3000')
})