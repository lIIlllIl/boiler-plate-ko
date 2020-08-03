# 15장

#### 용어
- React 
    - 2013년 발표된, 페이스북에서 제공하는 프론트엔드 라이브러리 
    - UI를 만들기 위한 자바스크립트 라이브러리 

- React 사용 이유 
    - component를 이용한 뛰어난 재사용성
    - Virtual DOM을 이용한 빠른 Rendering
    - Observable과 여러 개념들을 사용해 사용자와 상호작용하며 실시간으로 변화하는 UI의 데이터를 효율적으로 처리

- UI 변경 시 Real DOM vs Virtual DOM 
    - Real DOM
       0. UI에서 변경사항 발생
       1. 변경사항을 Real DOM에 적용시키고 해당 페이지 전체를 새로고침
    - Virtual DOM 
        0. UI에서 변경사항 발생
        1. JSX를 렌더링하여 Virtual DOM 갱신
        2. 갱신한 Virtual DOM과 갱신 이전의 Virtual DOM의 상태를 저장한 Snapshot과 비교하여 변경된 부분을 확인하는 Diffing 진행
        3. 변경된 부분만 Real DOM에서 새로고침 