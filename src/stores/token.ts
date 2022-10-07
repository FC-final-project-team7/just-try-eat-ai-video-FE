const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const Tokens = {
  get access() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },
  set access(v) {
    localStorage.setItem(ACCESS_TOKEN_KEY, v ?? '');
  },

  get refresh() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  set refresh(v) {
    localStorage.setItem(REFRESH_TOKEN_KEY, v ?? '');
  },

  getBody() {
    return {
      accessToken: this.access,
      refreshToken: this.refresh,
    };
  },

  clear() {
    this.access = '';
    this.refresh = '';
  },
};
