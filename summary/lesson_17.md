# 17장

#### 용어
- npm(node package manager)
    - node.js package의 저장소(registry) 역할 
    - node.js 패키지 설치 및 버전 관리를 할 수 있는 CLI 기반의 유틸리티 
    - npm을 통해 패키지 또는 모듈이라고 불리는 자바스크립트 소프트웨어를 프로젝트에 설치하여 사용하거나, 설치한 패키지들의 버전을 관리하는 기능 제공 

- npm 구성 
    - npm 웹사이트(자바스클비트 모듈/패키지 웹사이트)
    - CLI(Command Line Interface) 
    - 저장소(registry)

- npx 
    - npm@5.2.0 버전부터 새로 추가된 도구
    - npm과 달리 자바스크립트 모듈을 설치하지 않음 

- CRA 생성 시 npm vs npx 
    - npm : global로 CRA를 설치한 뒤 이를 통해 react boilerplate 생성 
    - npx : npm의 저장소에서 CRA를 찾은 뒤 이를 통해 react boilerplate 생성
    - npx 사용 시 npm과 달리 CRA를 local에 설치하지 않기 때문에 Disk Space를 낭비하지 않으며, npm 저장소에 있는 CRA를 실행하기 때문에 항상 최신 버전을 사용