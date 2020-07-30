const mongoose = require('mongoose')

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

// schema를 model로 감싸줌 
const User = mongoose.model('User', userSchema)

// 다른 곳에서도 사용할 수 있도록 User.js를 require() 함수를 통해 가져왔을 때 
// User model, 즉 userSchema가 반환되도록 명시 
module.exports = { User }
