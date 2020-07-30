const express = require('express');
const app = express();
const port = 5000;

// body-parser를 가져옴 
const bodyParser = require('body-parser');

// User schema를 가져옴 
const { User } = require('./models/User');

// application/x-www-form-urlencoded 인코딩
app.use(bodyParser.urlencoded({extended: true}));

// application/json 인코딩
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@testcluster.acybk.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopolgy: true, 
    userCreateIndex: true,
    useFindAndModify : false 
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/register', (req, res) => {
  // 회원 가입시 필요한 정보들을 client에서 받아 데이터베이스에 저장하는 라우터

  // body-parser 설정으로 request의 body를 인코딩해서 사용할 수 있음 
  const user = new User(req.body)

  // mongodb에 저장 
  user.save((err, doc) => {
    // 에러 발생시 
    if(err) {
      // response에 json 형태로 success 여부(false)와 에러 전송
      return res.json({ success: false, err })
    }
    // 성공시 json 형태로 success 여부(true) 전송 
    return res.status(200).json({ success: true })
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
