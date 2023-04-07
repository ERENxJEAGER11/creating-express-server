const express = require('express');  //import express
const app = express();  // create an instance of express
const port = 3000    //local port


// define route and api
app.get('/', (req,res) => {
    res.send('hi Aman')
})

app.get('/route2', (req,res) => {
    res.send('hi Aman I am route 2')
})


// start http server
app.listen(port, () => {
    console.log('listening on port 3000')
})