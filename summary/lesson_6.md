# 5장

#### 용어
- git
    - 소스 코드를 관리할 수 있는 형상관리시스템 

- github
    - git으로 관리하는 코드에 대해 클라우드 서비스를 제공해주는 호스팅 플랫폼 

- git은 tool, github는 git을 사용하는 서비스라고 정의할 수 있음 

- SSH(Secure Shell Protocol) 
    - 컴퓨터와 컴퓨터 간에 인터넷과 같은 Public Network를 통해 통신을 할 경우 안전하게 통신을 하기 위한 프로토콜
    - local git 저장소와 remote git 저장소간의 안전한 통신을 위해 SSH 이용 
    - https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh 참조 

#### 내용

```sh
$ ls -a/.ssh
```
- SSH 설정 확인
- id_rsa(비밀 키) / id_rsa.pub(공개 키) 가 있을 경우 SSH 설정이 적용된 상태 

```sh
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
- SSH 키 생성 

```sh
$ eval $(ssh-agent -s)
```
- SSH Agent를 background에 실행시킴 

```sh
$ ssh-add ~/.ssh/id_rsa
```
- SSH 비밀키를 SSH Agent에 추가

```sh
$ clip < ~/.ssh/id_rsa.pub 
```
- SSH 공개 키 복사
- 복사한 공개 키를 github settings에 설정 

```sh
$ git remote add origin 
```
- github의 git repository remote 주소를 설정 

```sh
$ git push -u origin master
```
- github에 master branch를 전송 