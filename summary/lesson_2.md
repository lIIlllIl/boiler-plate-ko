# 2장

#### 용어
- node.js
    - 자바스크립트를 server-side에서 사용할 수 있도록 하는 언어

- express 
    - node.js의 API를 단순화하고 새로운 유용한 기능을 추가하는 프레임워크
    - 확장성을 지향하므로 불필요한 간섭을 하지 않으며 서드파티 라이브러리로 쉽게 확장됨

#### 내용
```sh
$ node -v
```
- node.js 버전 확인(설치여부 확인)

```sh
$ mkdir  
```
- 현재 폴더 디렉토리에서 새로운 폴더 생성 

```sh
$ npm init 
```
- npm package 설정
- package-name / version / description / entry point / test command / git repository / kewords / author / license 설정 
- 설정한 내용을 토대로 루트 디렉토리에 package.json 생성

```sh
{
  "name": "boiler-plate",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "lIIlllIl",
  "license": "ISC"
}
```
- 기본값으로 설정한 package.json 
- main : index.js이므로 backend 시작점은 index.js 

```sh
$ npm install express --save
```
- express 설치 
- --save : package.json의 dependencies에 설치한 module 명시

```sh
"dependencies": {
    "express": "^4.17.1"
}
```
- 다운받은 dependencies는 루트 디렉토리의 node_module에 저장됨 

```sh
  "scripts": {
    "start" : "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- npm 명령어 추가 
- `$ npm run start`로 `$ node index.js` 실행 가능  
