# 5장

#### 용어
- git
    - 형상관리시스템
    - 분산버전관리시스템

- Working Directory 
    - 아무런 변경사항도 git에 적용되지 않은 상태

- Staging Area
    - git에만 존재하는 개념 
    - git repository에 변경사항이 저장되기 전 대기하는 공간

- git repository (local)
    - local에 존재하는 git 저장소

- git repository (remote) 
    - 웹 상에 존재하는 git 저장소 
    - github을 사용하므로 github에 존재하는 git 저장소 

- .gitignore 
    - git 저장소에 제외할 대상을 명시하는 역할 
#### 내용
```sh
$ git --version
```
- git 버전확인

```sh
$ git init
```
- local git 저장소 생성 

```sh
$ git status
```
- git 저장소의 상태 확인

```sh
$ git add 
```
- Working Directory에서 Staging Area로 변경사항을 전달하는 명령어

```sh
$ git commit 
```
- Staging Area의 변경사항들을 git 저장소에 반영하는 명령어

```sh
$ git rm --cached node_modules -r 
```
- Staging Area에 저장된 변경사항을 삭제하는 명령어
- node_module은 npm으로 다운받은 모듈이 저장된 곳이며, package.json을 통해 다운받을 수 있기 때문에 굳이 많은 용량을 차지하는 node_module 폴더까지 git 저장소에 저장할 필요가 없음