const express = require('express');
const bodyParser = require ('body-parser');
const app = express()
const cors = require('cors');
const xlsx = require ('xlsx');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


// app.use(cors({
//     origin: ['https://www.section.io', 'https://www.google.com/']
// }));

app.use(cors());


// app.get('/', function (req, res) {
//   res.send('Hiba Al-Fayssal')
// })

// app.get('/Hiba',  (req, res) =>{
//      res.send('Hiba Al-Fayssal')
// })

app.get('/getSingleStudent',  (req, res) =>{
    res.send({id:2, name: 'Hiba Al_Fayssal', age: 24})
})

app.get('/getAllStudents',  (req, res) =>{
    // res.send(
    //     [
    //         {id:2, name: 'Hiba Al_Fayssal', age: 24},
    //         {id:3, name: 'Raghed', age: 23},
    //         {id:8, name: 'Test', age: 20},
    //         {id:5, name: 'Test02', age: 26},
    //     ]
    // )
    let wb = xlsx.readFile('data.xlsx');
    let ws = wb.Sheets ['Students'];
    let data = xlsx.utils.sheet_to_json(ws);
    res.send (data);
})

// app.post('/login' , (req, res)=>{
//     res.send({id:2, name: 'Hiba Al_Fayssal', age: 24});
//     console.log(req.body.username);
//     console.log(req.body.password);
// })
app.post('/login' , (req, res)=>{
    let _username = req.body.username;
    let _password = req.body.password;
    if (_username == 'Hiba Al-Fayssal' && _password == 'Hiba2024'){
        res.status(200).send ('Success');
    }
    else
    {
        res.status(403).send ('wrong username or password');
    }
})
app.listen(1999);

// nodemon runs js and restart the current file aut..