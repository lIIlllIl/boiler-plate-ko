const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const config = require('./config/key');
const cookieParser = require('cookie-parser');

const { auth } = require('./middleware/auth');
const { User } = require('./models/User');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
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

app.post('/api/users/register', (req, res) => {

  const user = new User(req.body);

  user.save((err, doc) => {
    if(err) {
      return res.json({ success: false, err })
    }
    return res.status(200).json({ success: true })
  });
});
   
app.post('/api/users/login', (req, res) => {

  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false, 
        message: "없는 이메일입니다."
      })
    }

    user.comparePassword( req.body.password, (err, isMatch) => {
      if(!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 일치하지 않습니다."
        });
      }

      user.generateToken((err, user) => {
        if(err) {
          return res.status(400).send(err);
        }
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

// auth : request 이후 callback function 호출 전에 어떠한 기능을 수행하는 middleware
app.get('/api/users/auth', auth, (req, res) => {
  // middleware auth의 동작이 모두 완료되고 Authentication이 true일 경우 동작 
  res.satus(200).json({
    // auth.js에서 req.user = user로 요청에 user 정보를 추가했기 때문에 접근 가능 
    // role이 0이 아닐 경우 관리자 
    _id: req.user._id, 
    isAdmin: req.user.role === 0 ? false : true, 
    isAuth: true, 
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname, 
    role: req.user.role,
    image: req.user.image
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
