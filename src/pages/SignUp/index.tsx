import { useState } from 'react';
import { pagesTo } from '../pages';
import { Link } from 'react-router-dom';

import * as S from './style';
import Stepper from './Stepper';
import Heading from '~/components/Heading';
import FilledButton from '~/components/Buttons/FilledButton';

import { ReactComponent as CheckboxActive } from '~/assets/icons/checkbox-active.svg';
import { ReactComponent as Checkbox } from '~/assets/icons/checkbox.svg';

const SignUpPage = () => {
  const [checked, setChecked] = useState(false);

  const onCheckHandler = () => {
    setChecked(!checked);
  };

  return (
    <S.Container>
      <Heading>회원가입</Heading>
      <Stepper />
      <S.TermsArea>
        <br />제 1장 총칙
        <br />
        <br />제 1 조(목적)
        <br />
        <br />
        제1조(목적) 이 약관은 회사가 온라인으로 제공하는 디지털콘텐츠(이하
        &quot;콘텐츠&quot;라고 한다) 및 제반서비스의 이용과 관련하여 회사와
        이용자와의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
        <br />
        <br />제 2 조(약관의 효력과 변경)
        <br />
        <br />
        1. 이용자가 본 약관 내용에 동의하는 경우, 본 서비스 제공 행위 및 회원의
        서비스 사용 행위에 본 약관이 우선적으로 적용됩니다.
        <br />
        2. 회사가 약관을 개정할 경우, 적용일자 및 개정사유를 명시하여 현행약관과
        함께 초기화면에 그 적용일 7일 이전부터 적용 전일까지 공지합니다. 단,
        회원에 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전
        유예기간을 두고 공지합니다. 이 경우 개정 전 내용과 개정 후 내용을
        명확하게 비교하여 회원이 알기 쉽도록 표시합니다.
        <br />
        3. 변경된 약관은 홈페이지에 공지하거나 e-mail을 통해 회원에게 공지하며,
        약관의 부칙에 명시된 날부터 그 효력이 발생됩니다. 회원이 변경된 약관에
        동의하지 않는 경우, 회원은 본인의 회원등록을 취소(회원탈퇴)할 수 있으며,
        변경된 약관의 효력 발생일로부터 7일 이내에 거부의사를 표시하지 아니하고
        서비스를 계속 사용할 경우는 약관 변경에 대한 동의로 간주됩니다.
        <br />
        <br />제 3 조(용어의 정의)
        <br />
        <br />
        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
        <br />
        1. &quot;회사&quot;라 함은 &quot;콘텐츠&quot; 산업과 관련된 경제활동을
        영위하는 자로서 콘텐츠 및 제반서비스를 제공하는 자를 말합니다.
        <br />
        2. &quot;이용자&quot;라 함은 &quot;회사&quot;의 사이트에 접속하여 이
        약관에 따라 &quot;회사&quot;가 제공하는 &quot;콘텐츠&quot; 및
        제반서비스를 이용하는 회원 및 비회원을 말합니다.
        <br />
        3. &quot;회원&quot;이라 함은 &quot;회사&quot;와 이용계약을 체결하고
        &quot;이용자&quot; 아이디(ID)를 부여받은 &quot;이용자&quot;로서
        &quot;회사&quot;의 정보를 지속적으로 제공받으며 &quot;회사&quot;가
        제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다.
        <br />
        4. &quot;비회원&quot;이라 함은 &quot;회원&quot;이 아니면서
        &quot;회사&quot;가 제공하는 서비스를 이용하는 자를 말합니다.
        <br />
        5. &quot;콘텐츠&quot;라 함은 정보통신망이용촉진 및 정보보호 등에 관한
        법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는
        부호·문자·음성·음향·이미지 또는 영상 등으로 표현된 자료 또는 정보로서,
        그 보존 및 이용에 있어서 효용을 높일 수 있도록 전자적 형태로 제작 또는
        처리된 것을 말합니다.
        <br />
        6. &quot;아이디(ID)&quot;라 함은 &quot;회원&quot;의 식별과 서비스이용을
        위하여 &quot;회원&quot;이 정하고 &quot;회사&quot;가 승인하는 문자 또는
        숫자의 조합을 말합니다.
        <br />
        7. &quot;비밀번호(PASSWORD)&quot;라 함은 &quot;회원&quot;이 부여받은
        &quot;아이디&quot;와 일치되는 &quot;회원&quot;임을 확인하고 비밀보호를
        위해 &quot;회원&quot; 자신이 정한 문자 또는 숫자의 조합을 말합니다.
        <br />
      </S.TermsArea>
      <S.AgreeArea>
        <div onClick={onCheckHandler}>
          {checked ? <CheckboxActive /> : <Checkbox />}
        </div>
        <span>모든 약관에 동의합니다.</span>
      </S.AgreeArea>
      {checked ? (
        <Link to={pagesTo.info}>
          <FilledButton width="168px" height="40px">
            확인
          </FilledButton>
        </Link>
      ) : (
        <FilledButton width="168px" height="40px" disabled>
          확인
        </FilledButton>
      )}
      <S.LoginArea>
        이미 계정이 있으신가요?
        <Link to={pagesTo.login}>
          <p>로그인 화면으로 이동</p>
        </Link>
      </S.LoginArea>
    </S.Container>
  );
};

export default SignUpPage;
