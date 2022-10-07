export interface ITokenResult {
  grantType: 'bearer';
  accessToken: string;
  refreshToken: string;
  tokenExpriesIn: number;
}

export interface ILogin {
  username: string;
  password: string;
}
