var express = require('express')
var cors = require('cors')
var app = express()
const port = 3000;
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  res.send('<h1>dog</h1>')
})

app.get('/cat', function (req, res) {
  res.json({'sound':'nya'});
})

app.get('/user/:id', function (req, res) {
  const q = req.params
  console.log(q);
  res.json({'userId' : q})
})

app.get('/user2/:id', function (req, res) {
  const q = req.query
  console.log(q);
  res.json(q);
})

app.post('/user3/:id', function (req, res) {
    const q = req.params
    console.log(q);
    const b = req.body
    res.json({'userId' : q})
})

app.get('/sound/:name', function (req, res) {
    const {name} = req.params
    if (name == 'dog') {
        res.json({'sound' : 'dog'});
    } else {
        res.json({'sound' : 'etc'});
    }
})




app.listen(port, () => {
    console.log('connecnt');
});