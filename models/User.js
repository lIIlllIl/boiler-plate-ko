const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        maxlength: 50
    }, 
    email: {
        type: String, 
        trim: true, 
        unique: 1
    }, 
    password: {
        type: String,
        minlength: 5
    }, 
    lastname : {
        type: String, 
        maxlength: 50
    }, 
    role: {
        type: Number,
        default: 0 
    },
    image: String,
    token: {
        type: String
    }, 
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function( next ) {
    var user = this; 

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) {
                return next(err);
            }

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) {
                    return next(err);
                }

                user.password = hash;
                next();
            });
        });
    }
    else {
        next();
    }
})

// 사용자가 입력한 비밀번호와 mongoDB에 저장된 비밀번호를 비교하는 메소드 
// plainPassword : 클라이언트에서 입력한 비밀번호 
// cb : callback function 약어 
userSchema.methods.comparePassword = function(plainPassword, cb) {
    // mongoDB에 저장된 암호화된 비밀번호를 복호화할 수 없기 때문에 
    // plainPassword를 암호화한 뒤 이를 mongoDB에 저장된 암호화된 비밀번호와 비교 
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        // 오류 발생 시 오류 내용을 callback function의 매개변수로 반환 
        if(err) {
            return cb(err);
        }
        // err : null, 오류가 발생하지 않음 
        // isMatch : 비밀번호 일치여부(true) 
        cb(null, isMatch);
    })
}

// 로그인한 사용자의 토큰을 생성하는 메소드 
userSchema.methods.generateToken = function(cb) {
    // 사용자가 입력한 값을 model을 이용해 가져옴 
    var user = this; 
 
    // jsonwebtoken을 이용해서 token을 생성 
    // user._id와 secretToken을 활용하여 토큰 생성
    // jwt.sign()의 첫 번째 인자는 plain Object여야하므로 toHexString()으로 변환 
    // secretToken을 활용하면 user._id를 추출할 수 있으므로 회원식별가능 
    var token = jwt.sign(user._id.toHexString(), 'secretToken');

    user.token = token;

    // 생성한 토큰을 해당 회원의 레코드에 저장 
    user.save(function(err, user) {
        if(err) {
            return cb(err);
        }
        cb(null, user);
    })
}

const User = mongoose.model('User', userSchema);
 
module.exports = { User };
