# 26장
#### 용어
- Redux 
    - 상태(state) 관리 라이브러리  
    - 컴포넌트를 사용할 때 부모 컴포넌트에서 자식 컴포넌트로 정보를 전달하기에는 너무 복잡한 구조의 프로젝트에서 손쉽게 컴포넌트의 데이터를 변경시키기 위한 모듈 

- prop(Properties)
   - 컴포넌트끼리 값을 전달하는 수단
   - 부모 컴포넌트에서 자식 컴포넌트로만 전송 가능
   - 자식 컴포넌트에서는 부모 컴포넌트에서 전송한 props의 값을 변경할 수 없음(immutable)
  
- state 
    - 컴포넌트 안에서 데이터를 다루는 수단
    - 컴포넌트 안에서 state의 값을 변경할 수 있음(mutable)
    - 값 변경 시 re-rendering 된다는 특징을 가지고 있음

![1](./images/26-1.jpg)
- Redux Life Cycle 
- 한 방향으로만 흐름
- Actions : 상태를 알려주는 객체
- Reducer : 이전 state와 action object를 받아 state를 변환하여 반환 
- Store : 애플리케이션의 state를 관리 