# 4장

#### 용어
- model 
    - schema를 감싸주는 역할

- schema 
    - 데이터베이스의 구조와 제약조건을 전반적으로 명시한 것 

- mongoose의 model 
    - 데이터를 처리하기 위한 데이터베이스 인터페이스 제공 

- mongoose의 schema 
    - 문서의 구조, 기본값, 제약조건 등을 명시

#### 내용
```sh
const User = mongoose.model('User', userSchema)
```
- schema를 model로 감싸줌 

```sh
module.exports = { User }
```
- 다른 곳에서도 사용할 수 있도록 User.js를 require() 함수를 통해 가져왔을 때 User model, 즉 userSchema가 반환되도록 명시