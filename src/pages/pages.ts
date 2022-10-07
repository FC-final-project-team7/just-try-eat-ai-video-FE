// <Link to={pagesTo.login}>로그인 페이지</Link>
// link 에서 to 에 넣을 때 사용
export const pagesTo = {
  main: '/',
  login: '/login',
  findId: '/find-id',

  // 내부 페이지에 맞춰서 추가 가능
  signUp: '/sign-up',

  projects: '/projects',
  text: (id: string) => `/text/${id}`,
  sentence: (id: string) => `/sentence/${id}`,
  avatar: '/avatar',
  // avatar: (id: string) => `/avatar/${id}`,
  avatarUploadAudio: (id: string) => `/avatar-audio/${id}`,
};

// <Route path={pagesPath.login} element={<LoginPage />} />
// Route 에서 path 넣을 때 사용
export const pagesPath = {
  main: pagesTo.main,
  login: pagesTo.login,
  findId: pagesTo.findId,

  // 내부 페이지에 맞춰서 추가 가능
  signIn: pagesTo.signUp,

  projects: pagesTo.projects,
  text: pagesTo.text(':id'),
  sentence: pagesTo.sentence(':id'),
  avatar: pagesTo.avatar,
  // avatar: pagesTo.avatar(':id'),
  avatarUploadAudio: pagesTo.avatarUploadAudio(':id'),
};
