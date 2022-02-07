# 홈바 백과사전 (Home Bar Dictionary)

![Thumbnail](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqtFNF%2FbtrspKcYaMT%2FhWnZcnMSvZ2FM1KChN6bv0%2Fimg.png)

### 📍 홈페이지 [homebardic](http://www.homebardic.com/)

<br>

## 🍸 프로젝트 소개

- 홈바 백과사전은 집에서 홈바를 즐기는 애주가들이 무엇을 만들어 먹을지 어떻게 만들어야 할지에 대한 고민을 줄여주고자 칵테일 제조법에 대한 정보를 제공하는 웹페이지를 만들어 보았습니다.

<br>

## 📆 개발 기간

- 2022년 1월 24일 ~ 2022년 2월 3일 (11일)

<br>

## 💻 기술 스텍 및 라이브러리

- 개발 언어 : TypeScript
- 개발 라이브러리 : React
- 상태관리 : Redux/toolkit
- 모듈 번들러 : Webpack
- 배포 : AWS S3, EC2, Route 53
- 통신 : Axios
- 스타일 : Styled-Components
- 서버 : Express(node.js)
- DataBase : MySQL

<br>

## 💊 주요 기능

### 메인 기능

- 기주의 8가지 종류에 따라 제조법을 볼 수 있도록하여 기주를 기준으로 원하는 칵테일을 빠르게 찾을 수 있도록 하였습니다.
  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcaVnbP%2FbtrsrWcUnzX%2FSw2xvUcwVKlXgD32L42Gc0%2Fimg.png)

- 이름은 칵테일 명칭, 기주는 기본이 되는 베이스 술, 재료는 기주에 첨가되는 각종 술, 용법은 4가지의 기본 제조 방법 (빌드, 블렌드, 스터, 쉐이크), 글라스는 칵테일 종류에 따른 잔의 종류, 설명은 칵테일에 대한 상세한 제조 방법 혹은 유래로 칵테일에 대한 6가지 정보를 제공하고 있습니다.

### 로그인 기능

- 칵테일 제조법에 대한 정보제공 목적으로 만들어진 홈페이지로 관리자에게만 작성, 수정, 삭제의 권한을 갖기 위해 관리자용 계정 하나만 생성하여 사용하고 있습니다.
  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F304Km%2Fbtrsvd5175Y%2FXa7rq2HKrYJtRKblKGW0N0%2Fimg.png)
- JWT 토큰 인증 방식으로 쿠키에 저장하여 관리자 권한을 부여하는 방식으로 기능을 구현하였습니다.
- crypto 모듈을 활용하여 해시화한 암호를 DB에 저장하여 보안성을 강화하였습니다.

### 작성, 수정, 삭제하기

- 작성하기 버튼은 관리자 권한이 있을 때만 보이며, 작성 페이지는 모달창으로 구현하였습니다.
  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcam5io%2FbtrsrVkJdET%2FumWKUfsGWKBS0g9jYxCM3K%2Fimg.png)

  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5QaBH%2FbtrsC9Kbo5t%2FCbswvXEHllKYibTpC8duqk%2Fimg.png)

- 이름, 기주, 재료, 용법, 글라스, 설명을 입력받아 DB에 저장하는 기능을 구현하였습니다.
- 수정하기 버튼 역시 관리자 권한이 있을 경우에만 보이며, 모달창으로 구현하였습니다.
  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5KIgd%2FbtrspKxgYRH%2FAZraml3iaW8Sc2t5tH5ePK%2Fimg.png)
- 삭제하기는 alert으로 삭제 여부를 확인 후 삭제되도록 기능을 구현하였습니다.

<br>

## ✍️ 프로젝트를 통해 배운 점

### TypeScript

- 타입스크립트를 활용해서 프로젝트를 완성하였지만, 기능을 제대로 이해하고 장점을 잘 이용하지 못했던 것 같아 아쉬웠습니다. 프로젝트 규모가 작다 보니 사실상 자바스크립트로 구현했을 때와 큰 차이가 없었습니다. 기회가 된다면 더 큰 규모의 프로젝트를 진행해보고 싶습니다.

### webpack

- 이전까지는 매번 Create React App을 통해서 프로젝트를 진행하다 처음으로 Webpack을 사용해보게 되었습니다. Webpack을 공부해보면서 CRA의 기능을 이해하는 데 많은 도움이 되었습니다. 또한, 번들러의 기능과 필요한 이유에 대해 배울 수 있었던 좋은 기회가 되었습니다.
- 계속되는 버전 업데이트로 인해 많은 변화가 생겨 오류가 발생할 경우 해결할 레퍼런스를 찾기가 어려웠습니다. 그래서 공부하고 습득한 기술에 대해 계속해서 관심을 갖고 업데이트 사항에 대해 끊임없는 공부가 필요하다고 생각하게 되었습니다. 또한, 고민하고 공부한 것에 대해 기록함으로써 같은 어려움을 겪는 다른 개발자들을 위해 조금이나마 도움이 될 수 있도록 노력해야겠다고 생각하였습니다.
- webpack의 여러 가지 자세한 설정에 아직 이해가 부족하고 생각해서 webpack, devserver, babel 등에 대해 더욱 깊게 공부할 필요성을 느끼게 되었습니다.

### node.js

- 서버에 대해 공부할 기회가 없었는데 이번 프로젝트를 통해 공부해볼 수 있었던 좋은 기회가 되었습니다. node의 여러 가지 기능과 모듈들의 역할에 대해 공부할 수 있었고, 보안에 대한 지식도 쌓을 수 있었습니다.
- CRUD기능에 대한 API구현을 목적으로 하다 보니 하나의 파일에 모든 코드를 작성하게 되었습니다. 그렇다 보니 가독성이 많이 떨어지고 복잡해지게 되어 아쉬웠습니다. 서버에 대해 더욱 공부하고 다른 개발자들의 코드를 참고함으로써 체계적으로 코딩해야겠다는 생각을 하게 되었습니다.

### MySQL

- MySQL에 대해 처음으로 사용해볼 수 있었던 기회 좋은 기회였습니다. 그저 어렵게만 느껴졌던 MySQL과 가까워지게 된 것 같습니다.
- 단순한 데이터 구조로 되어 있어서 MySQL의 기본 기능만 사용하게 되었습니다. 다음에 기회가 된다면 관계형 데이터베이스에 대해 공부해보고 직접 구현해보고 싶습니다.
