# Today Do IT

## Initial set up

- TypeScript 템플릿을 가져옴.
- [Vercel](https://vercel.com/)에서 react-hw의 today-do-it을 등록 후, URL 생성, 생성된 URL을 [github app](https://github.com/settings/developers)에 저장.
  - 이 모든 과정은 OAuth2로 앱에 로그인 하기 위함.
- [Pocket Host](https://pockethost.io/)에 회원가입 후, 우측 상단 + New App 버튼 선택, PocketBase URL(Database URL)을 발급받음. github app에 Authorization callback URL를 입력.
  - Pocket Base가 OAuth2 Flow를 핸들할 수 있도록 하기 위함.
- [github app](https://github.com/settings/developers)에서 **Client ID**, **Client secret**을 발급받은 후 PocketBase Admin UI → settings → Auth Providers에서 Github 선택, 발급받은 **Client ID**, **Client secret** 입력 후 저장.
