const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const config = require('./config/key');

// 쿠키에 토큰을 저장하기 위해 cookie-parser를 가져옴
const cookieParser = require('cookie-parser');

const { User } = require('./models/User');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// cookie-parser를 사용 
app.use(cookieParser());

const mongoose = require('mongoose');

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
   
// 로그인 라우터 
app.post('/api/users/login', (req, res) => {
  // 요청된 이메일을 데이터베이스에 있는지 찾음 

  // 조건에 맞는 데이터를 찾는 mongoDB 메소드 
  User.findOne({ email: req.body.email }, (err, user) => {
    // DB에 정보가 없을 경우 
    if(!user) {
      return res.json({
        loginSuccess: false, 
        message: "없는 이메일입니다."
      })
    }

    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인 
    // comparePassword() 메소드 : User 모델에 정의한 비밀번호 비교 메소드 
    // req.body.password : 클라이언트에서 입력한 plain text의 비밀번호
    // isMatch : 클라이언트에서 입력한 비밀번호와 mongoDB에 저장된 비밀번호가 일치하는지에 대한 여부(T/F)
    user.comparePassword( req.body.password, (err, isMatch) => {
      // isMatch = false일 경우 동작, 비밀번호가 일치하지 않을 경우
      if(!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 일치하지 않습니다."
        });
      }

      // 비밀번호가 일치한다면 토큰 생성
      // gnenerateToken : User 모델에 정의한 토큰 생성 메소드 
      user.generateToken((err, user) => {
        // 오류 발생 시 상태코드 400과 에러메세지를 클라이언트로 전송
        if(err) {
          return res.status(400).send(err);
        }

        // 토큰을 쿠키에 저장, cookie-parser 이용 
        // x_auth : cookie() 메소드의 첫 번째 인자, 쿠키의 이름을 지정
        // user_token : cookie() 메소드의 두 번째 인자, x_auth 쿠키에 저장할 데이터
        res.cookie("x_auth", user.token)
           .status(200)
           .json({
             loginSuccess: true,
             userId: user._id
           })
      })
    })
  }) 
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
