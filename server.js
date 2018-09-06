const express = require('express');
let app = express();

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(8080,()=>console.log('app running on port 8080'));