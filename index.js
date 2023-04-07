const express = require('express');  //import express
const app = express();  // create an instance of express
const port = 3000    //local port

const data = require('./data.json');   //import data

// define route and api
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

app.get('/SignUp', (req,res) => {
    res.send("Hi aman , Sign up?")
})


// start http server
app.listen(port, () => {
    console.log('listening on port 3000')
})