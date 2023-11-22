import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', (req, res) => {
    res.send('hello wwwworld');
});

// RECEIVE GET DATA
app.get('/get_test', (req, res) => {
    let id = req.query.id;
    let pw = req.query.password;
    res.send(`your id is ${id} and your password is ${pw}`);
})

//Post data 받기
app.post('/post_test', (req,res) => {
    // let id = req.body.id;
    // let password = req.body.password;
    // res.send(`Ur id is ${id} pw is ${password}`);
    res.send(req.body);
})

app.listen(port, ()=> {
    console.log("server on ");
});

