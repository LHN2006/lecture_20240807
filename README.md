# lecture_20240723
분당경영고등학교 2024년도 산학맞춤반 강의 내용입니다.

# 7월09일 (화)
1. 오리엔테이션
  - 세상 돌아가는 IT 얘기
  - 수업을 "인공지능 플랫폼 기능 구현"
    - 파이썬이 중요
  - 진학과 사회로 진출 기로
    - 회사에서 필요한 기술이 뭐가 있는지?
    - 서버 side에서 필요한 기술
      - 유닉스 환경, 리눅스 환경, windows NT
      - 리눅스를 적극 추천
    - 크라이언트 Side에서 필요한 기술
      - 3대 MVC, MVVR 개발패턴
      - 리액트(70%), 앵귤러, 뷰

# 7월 16일 (화)
1. 환경설정
  - visual studio 설정
    - 마크다운 사용법 (스스로)
    - drawio 확장자로 설계문서(흐름도)
  - git 설정
    - windows에 깃 설치
    - clone, stage, commit, push, origin, branch
  - 리눅스 서버를 만들자.
    - 방법1. 클라우드(cloud)에 만들기
    - 방법2. 내 학교 컴퓨터에 windows에 만들기
    - 방법3. 추천) 내 노트북

# 7월 23일 (화) 과제
1. Git 활용
2. GitHub 활용
3. CodeSpace 활용
4. 리눅스 명령어

# 7월 24 ~ 26일 (수 ~ 금) 과제
1. 개인pc 리눅스 시스템 구축
  - 노트북 추천 (학교컴퓨터)
  - 지속가능한 개발환경을 만들도록
  - 윈도우 : WSL(Windows Subsystem for Linux)
2. 서버 side
  - NodeJS
  - 몽고DB
3. 클라이언트
  - 리액트(70%), 뷰, 앵귤러

# 7월24일(수) 과제
1. vi 에디터를 사용할 줄 알아야 한다. (IDC같은 서버실에서 모니터 물려 작업할때)
2. NodeJS, express, dotenv, mongoose, ejs
3. Mongodb Atlas 회원가입, db생성하고, 클라이언트연결
4. Server단 구성 + 회원가입 중간까지 진행

# 7월25일(목) 과제
1. Server단 끝내기
  - 핵심알고리즘만 추출
  - 데이타를 입력하는 화면 제작
  - 사용자 입력데이타를 서버에서 수신모듈 제작
  - 몽고DB Atlas 클라우드로 전송
  - 전송결과를 클라우드에서 확인함 (1인 3명씩 회원가입)
  - 처리결과를 클라이어트 화면에서 표시함 (성공메세지 표시)
  - 신규회원과, 중복여부를 체크까지 성공함 (이미 있는 회원입니다. 메세지 표시)

# 7월26일(금) 과제
0. save본 - https://github.com/bundang-highschool/lecture_20240726
1. 카카오톡 클라이언트 진행
  - NPX(Node Package eXecute) : 설치 + 실행개념
  - 리액트 설치
    - npx create-react-app client
    - cd client / npm start
  - tailwindcss 설치 (https://tailwindcss.com/docs/installation 메뉴얼 참조)
    - npm install -D tailwindcss
    - npx tailwindcss init
    - tailwind.config.js 파일안에 "./src/**/*.{html,js}" 넣기
    - src/input.css 맨위에 코드 삽입
  - React Router 설치
    - npm install react-router-dom
  - vscode 확장팩 설치
    - Tailwind CSS IntelliSense
    - ES7 React/Redux/React-Native snippets
      - refce 자동완성
2. async / await 약간의 실습(20분정도)

# 8월 5일(월) 과제
0. github codespace에서 postman 실행할 때
  - Header에  X-Github-Token 값을 전달해야함
  - echo $GITHUB-TOKEN값을 전달해야함 (echo $GITHUB_TOKEN 으로 알아냄)
1. 카카오클라이언트 완성
  - 회원가입 서버 api 호출
  - 추가설치
    - npm install axios : promise기반 http 클라이언트 라이브러리
    - npm install react-host-toast : 토스트메시지
    - npm install react-icons : 리렉트 기본제공 아이콘
  - 아이디(계정) 로그인 -> 비밀번호 로그인
  - 개인사진 프로필 등록
  - 기본적 Chat (대화기능)
2. 채팅화면 하드코딩으로 그리기
  - Sidebar.js, MessagePage.js

# 8월 6일(화) 과제
1. 카카오클라이언트 프로그램 제작
  - Chat sample 가볍게 예제 만들기
  - Chat 대화기능

# 2막 수업
# 8월 7일(수) 과제
1. LLM - ChatGPT ~

# 8월 9일 수업내용
1. (완)로그인 성공 후, 토큰 발행하고 쿠키 굽기
2. 쿠키를 읽고 사용자 조회
3. 위에서 읽은 정보 리덕스 넣기
4. 로그라웃
5. 홈에서 로그인 안되어 있으면, 로그인 페이지로 이동
-----------------------------------------------------
6. A.I 랭체인

# 8월 12일(월) 수업내용
1. 사용자정보 수정
2. 친구목록 보여주기
3. 채팅창 Header 만들기
------------------------------------------------
4. A.I 랭체인(계속)

# 8월 13일(화) 수업내용
1. 소캣통신 시작(환경구성)
2. /server  (소켓서버 제작)
    npm install socket.io
    /socket/index.js
3. /client  (소켓클라이언트 제작)
    npm install socket.io-client
    /src/pages/Home.js
4. 코드에 영향주기
  - Avata에 접속여부 표시
  - 대화방 상단에 상대방 노출

# 8월 20일(화)
1. 실제 대화하기


