export const FORM_REG = {
  regexId: new RegExp('^[a-z0-9_-]{4,20}$'),
  regexPw: new RegExp(
    '^.*(?=^.{8,16}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&+=]).*$'
  ),
  regexEmail: new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  regexName: new RegExp('^[ㄱ-ㅎ|가-힣|a-z|A-Z]{2,9}$'),
};

export const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidId: '영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다. (4-20자)',
  invalidPw: '영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
  invalidEmail: '이메일 형식에 일치하지 않습니다.',
  invalidName: '영문 대/소문자, 한글만 사용 가능합니다. (2-9자)',
};
