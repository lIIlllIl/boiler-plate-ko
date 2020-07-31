const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

// process.env.NODE_ENV의 상태에 따라 mongoDB 클러스터 연결을 위해 key.js를 가져옴
const config = require('./config/key');

const { User } = require('./models/User');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

// 분기처리된 config.mongoURI로 mongoDB 연결
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopolgy: true, 
    userCreateIndex: true,
    useFindAndModify : false 
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register', (req, res) => {

  const user = new User(req.body);

  user.save((err, doc) => {
    if(err) {
      return res.json({ success: false, err })
    }
    return res.status(200).json({ success: true })
  });
});
   
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
