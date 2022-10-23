// <Link to={pagesTo.login}>로그인 페이지</Link>
// link 에서 to 에 넣을 때 사용
export const pagesTo = {
  main: '/',
  login: '/login',
  findId: '/find-id',

  // 내부 페이지에 맞춰서 추가 가능
  signUp: '/sign-up',
  info: '/sign-up/info',
  completed: '/sign-up/completed',

  projects: '/projects',
  text: (id: number | string) => `/text/${id}`,
  sentence: (id: number | string) => `/sentence/${id}`,
  avatar: '/avatar',
  // avatar: (id: number) => `/avatar/${id}`,
  avatarUploadAudio: (id: number | string) => `/avatar-audio/${id}`,
};

// <Route path={pagesPath.login} element={<LoginPage />} />
// Route 에서 path 넣을 때 사용
export const pagesPath = {
  main: pagesTo.main,
  login: pagesTo.login,
  findId: pagesTo.findId,

  // 내부 페이지에 맞춰서 추가 가능
  signUp: pagesTo.signUp,
  info: pagesTo.info,
  completed: pagesTo.completed,

  projects: pagesTo.projects,
  text: pagesTo.text(':id'),
  sentence: pagesTo.sentence(':id'),
  avatar: pagesTo.avatar,
  // avatar: pagesTo.avatar(':id'),
  avatarUploadAudio: pagesTo.avatarUploadAudio(':id'),
};
