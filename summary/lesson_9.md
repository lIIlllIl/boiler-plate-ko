# 9장

#### 용어
- process.env.NODE_ENV 
    - node.js 기반에서의 대표적인 환경변수
    - 배포모드와 개발모드를 구분하는데 사용 

#### 내용

```sh
module.exports = {
    mongoURI: 'mongodb+srv://<username>:<password>@testcluster.acybk.mongodb.net/<dbname>?retryWrites=true&w=majority'
}
```
- /config/dev.js
- 개발모드에서 사용될 mongoURI 정의 
- gitignore에 해당 파일을 명시해 commit 시 제외 

```sh
if(process.env.NODE_ENV === 'production' ) {
    module.exports = require('./prod');
}
else {
    module.exports = require('./dev');
}
```
- /config/key.js
- 환경변수 process.env.NODE_ENV를 이용해 분기처리 

```sh
module.exports = {
    mongoURI: process.env.MONGO_URI
}
```
- /config/prod.js
- 외부에서(heroku) 명시한 process.env.MONGO_URI로 mongoURI 정의