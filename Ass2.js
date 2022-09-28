const express = require ('express');

const app = express();

const path = require('path')


app.get("", (req,res) => {
     
    res.send("<h1>Hello Client</h1>");
})

app.get("/first.html",(req,res)=>{
res.sendFile(path.join(__dirname + '/first.html'));
})

app.get("/second.html",(req,res)=>{
    res.sendFile(path.join(__dirname + '/second.html'));
    })

app.get("/third.html",(req,res)=>{
    res.sendFile(path.join(__dirname + '/third.html'));
    })

app.get("/fourth.html",(req,res)=>{
        res.sendFile(path.join(__dirname + '/fourth.html'));
        })

app.listen(3000,()=>{

    console.log('Server is start running at port:3000');

})