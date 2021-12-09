const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello i have deployed my app');
});

app.listen(port =>{
    console.log('listning at port number 3000');
})