const app = (require('express'))();
const bodyParser = require('body-parser');
const users = require('./model');
const middleware  = require('./middleware');

let count = 0;
let arr = [];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', middleware.checkSomething('BTC'));

app.get('/', (req, res) => {
      count += 1;
      console.log('requested ', count + ' times');
      console.log('req.cointype is ', req.coinType);
      users.find({}, (err, data) => {
            if(err) {
                  res.status(400).send(err.message)
            }
            else {
                  res.status(200).send(data)
            }
      })
     // res.status(200).send('Hello there!')
});

app.get('/condition/:name', (req,res) => {
      if(req.params.name) {
            console.log(req.params.name);
            //res.send('hello ' + req.params.name);
            users.findOne({name: req.params.name}, (err, data) => {
                  if(err) {
                        console.log(err.message);
                        res.send(err.message)
                  }
                  else {
                       data ? res.json({status: true, data: data}) : res.json({status:false, data: "Not found"})
                  }
            })

      }
      else res.send('hello stranger')
});

app.post('/add', (req,res) => {
      if(req.query.name) {
            arr.push(req.body);
            console.log(req.body.name);
            //res.send('done')
            users.create({name: req.body.name, age: req.body.age || 22})
                .then(result => {res.send('done')})
                .catch(err => res.send(err.message || 'Can not insert'))
      }
      else res.send('Not Done')
});

module.exports = app;