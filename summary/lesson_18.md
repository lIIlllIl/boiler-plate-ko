# 18장

#### 내용 

###### CRA 기본 구조 

```sh
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
- https://create-react-app.dev/docs/folder-structure/ 참조 
- src내의 서브 디렉토리를 작성할 수 있음 
- 빠른 렌더링을 위해 src만 webpack이 관리하므로 차후 작업한 소스 코드 및 리소스들은 src 하위에 위치시켜야 webpack이 인지할 수 있음 
- src/index.js
    - 자바스크립트 엔트리 포인트
    - App 컴포넌트를 불러옴 
    - index.html 내 id가 root인 요소에 App 컴포넌트를 렌더링 하도록 설정

- src/App.js
    - 프로젝트의 state(정보)값을 관리하는 중심 컴포넌트

- public/index.html 
 - CRA의 메인 페이지
 - public 내부의 파일만 index.html에서 사용가능 