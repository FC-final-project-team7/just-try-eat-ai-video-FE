import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Stepper from '../Stepper';
import Heading from '~/components/Heading';
import FilledButton from '~/components/Buttons/FilledButton';

import check from '~/assets/icons/check.svg';
import { pagesTo } from '~/pages/pages';

export const Container = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin-top: 64px;
`;

export const MainArea = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin-top: 116px;
`;

export const Title = styled.p`
  margin-top: 32px;
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

export const NameText = styled.span`
  display: inline;
  color: ${(props) => props.theme.colors.main.purple};
`;

export const SubTextGroup = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: 2;
  margin-bottom: 72px;
`;

export const LoginButton = styled(FilledButton)`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-bottom: 234px;
  border-radius: 10px;
`;

const Completed = () => {
  return (
    <Container>
      <Heading>회원가입</Heading>
      <Stepper />
      <MainArea>
        <img src={check} alt="check" />
        <Title>회원가입 완료</Title>
        <SubTextGroup>
          {/* TODO usename으로 변경 */}
          <NameText>김환경</NameText> 님의 회원가입이 <br /> 성공적으로
          완료되었습니다.
        </SubTextGroup>
        <Link to={pagesTo.login}>
          <LoginButton width="392px" height="48px">
            로그인
          </LoginButton>
        </Link>
      </MainArea>
    </Container>
  );
};
export default Completed;
