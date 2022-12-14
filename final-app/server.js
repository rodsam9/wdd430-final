const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

const index = require('./server/routes/index');
const todo = require('./server/routes/todo');

const mongo = require("mongoose");
//mongoose.set('strictQuery', false);

const db = mongo.connect("mongodb://localhost:27017/Todos", function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected to ${db} + ${response}`);
  }
});


const app = express();;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// const Schema = mongo.Schema;

// const TodoSchema = new Schema({
//   todo: String
// });

// const model = mongo.model('todos', TodoSchema, 'todos');

app.use(express.static(path.join(__dirname, 'dist/final-app')));
app.use('/', index);

// app.post('/todo', function(req, res){
//   const mod = new model(req.body);
//   console.log(req.body);
// })

app.get("/todo", function(req, res){
  res.render("index");
});
app.get('/todo', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/final-app/index.html'));
});

// app.post("/todo", function (req, res) {
//   console.log(req.body.todo);
// const todo = new Todo({
//     todo: req.body.todo
// });
// todo.save(function (err) {
//     if (err) {
//         throw err;
//     } else {
//       res.render("todo");
//     }
// });
// });

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);

server.listen(port, function() {
  console.log('API running on localhost: ' + port)
});