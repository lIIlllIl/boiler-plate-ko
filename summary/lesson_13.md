# 10장

#### 내용

```sh
let auth = (req, res, next) => {
    // 클라이언트 쿠키에서 토큰을 가져옴 
    let token = req.cookies.x_auth;
    
    // 토큰을 복호화한후 유저를 찾음 
    // User 모델에 정의한 메소드 
    User.findByToken(token, (err, user) => {
        if(err) {
            throw err;
        }

        // 해당 유저가 없는 경우(인증실패)
        if(!user) {
            return res.json({
                isAuth: false, 
                error: true
            })
        }

        // request에 token과 user를 추가해 index.js의 auth 라우터에서 token과 user를 확인할 수 있도록 함(인증성공) 
        req.token = token;
        req.user = user;

        // middleware 실행 후 callback function으로 이동시키기 위한 next() 메소드 
        next();
    })
}
```
- auth.js 
- 인증 처리 middleware 

```sh
userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    // 가져온 토큰을 jwt.verify() 메소드를 사욯애 복호화 
    // 토큰 생성 시 사용한 문자열 필요(secretToken)
    jwt.verify(token, 'secretToken', function(Err, decoded) {
        // 유저 아이디를 이용해 유저를 찾고 클라이언트에서 가져온 토큰과 DB에 저장된 토큰이 일치하는지 확인

        user.findOne({
            "_id": decoded, 
            "token": token
        }, function(err, user) {
            if(err) {
                return cb(err);
            }

            cb(null, user);
        })
    })
}
```
- User.js 
- 인증을 위해 토큰을 가져오는 method 

```sh
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
```
- index.js 
- 인증을 성공한 경우에만 유저 정보를 반환하는 인증 라우터 