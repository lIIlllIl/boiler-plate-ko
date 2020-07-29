// express module을 가져옴 
const express = require('express')

// 새로운 express 앱 생성 
const app = express()

// 포트 설정 
const port = 5000

// mongoose module을 가져옴 
const mongoose = require('mongoose')

// mongodb cluster와 연결 
mongoose.connect('mongodb+srv://<username>:<password>@testcluster.acybk.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    // mongodb 버전 업그레이드 시 deprecation warning을 없애기 위함
    useNewUrlParser: true, 
    useUnifiedTopolgy: true, 
    userCreateIndex: true,
    useFindAndModify : false 
    // mongodb 연결 시 출력 
}).then(() => console.log('MongoDB Connected...'))
    // 오류 발생 시 에러를 출력 
  .catch(err => console.log(err))

// root directory(/) 도달 시 Hello World 출력 
app.get('/', (req, res) => res.send('Hello World!'))

// 5000 포트에서 실행 
// 콘솔(터미널)에 Example app listening at http://localhost:5000 출력 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))