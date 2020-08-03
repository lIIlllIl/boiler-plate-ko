# 16장

#### 용어
- create-react-app(CRA)
    - 페이스북에서 개발한 react 웹 개발용 boilerplate 
    - 리액트 앱을 만들어주는 도구 

- CRA 사용 이유 
    - react 사용을 위해 node.js, yarn, webpack, babel 등의 프로젝트 환경 설정이 필요하나 초심자에게는 상당히 높은 난이도이기 때문
    - 다른 module bundler에 비해 performance가 우수 
        - yarn 
            - npm의 개선된 버전
            - npm보다 더 나은 속도, 더 나은 캐싱 시스템 제공
        - bable 
            - 자바스크립트 컴파일러
            - 최신 자바스크립트 문법을 지원하지 않는 브라우저를 위해 ES6, ES7과 같은 최신 자바스크립트 문법을 구형 브라우저에서도 인식할 수 있도록 ES5 문법으로 변환
            - babel 그 자체로는 문법을 변환해주는 기능만을 수행하며 babel-polyfill을 통해 현재 브라우저에서 지원하지 않는 함수를 검사하여 적용
        - webpack 
            - 자바스크립트 애플리케이션의 static module bundler
            - 규모가 큰 시스템의 수많은 자바스크립트 파일들을 관리하기 위한 module bundler 
            - 복잡한 리소스들을 묶어서(bundle) 관리해주는 역할
        - bundle
            - 소프트웨어 및 일부 하드웨어와 함께 작동하는데 필요한 모든 요소들을 포함하는 Package 
            - 각각의 모듈들에 대해 의존성 관계를 파악하여 하나 또는 여러 개의 그룹으로 구성 

```sh
$ npx create-react-app . 
```
- 현재 위치하고 있는 디렉토리에 create-react-app으로 react boilerplate 생성