# 27장
#### 용어
- Redux 
    - 상태(state) 관리 라이브러리  
    - 컴포넌트를 사용할 때 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달하기에는 너무 복잡한 구조의 프로젝트에서 손쉽게 컴포넌트의 데이터를 변경시키기 위한 모듈 
    - react에 종속적인 관계가 아닌 javascript의 상태(state)를 관리하는 라이브러리 

- react-redux
    - react에 특화된 redux 
  
- redux-promise
    - redux state 관리를 위한 action은 기본적으로 plain object이지만 promise 또는 function 형식으로도 올 수 있음 
    - redux-promise는 dispatch 시 actino의 형태가 promise일 경우 이를 redux store에 인식시키기 위한 middleware

- redux-thunk
    - redux state 관리를 위한 action은 기본적으로 plain object이지만 promise 또는 function 형식으로도 올 수 있음 
    - redux-promise는 dispatch 시 actino의 형태가 function일 경우 이를 redux store에 인식시키기 위한 middleware

```sh
$ npm install redux react-redux redux-promise redux-thunk --save
```
- redux, react-redux, redux-promise, redux-thunk 설치