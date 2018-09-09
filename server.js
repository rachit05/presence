const express = require('express');
const fs = require('fs');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/save',(req,res)=>{
    let [x,y] = [req.query.x,req.query.y];
    console.log('saved');
})

app.listen(5000, _ => console.log('app is running on port 5000'));