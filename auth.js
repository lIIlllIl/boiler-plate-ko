const { User } = require('../models/User');

// 인증 처리
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

module.exports = { auth };