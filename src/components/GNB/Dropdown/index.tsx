import { Link, useNavigate } from 'react-router-dom';
import { pagesTo } from '~/pages/pages';
import { Tokens } from '~/stores/token';
import styled from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';

export const DropdownContainer = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  background-color: ${(props) => props.theme.colors.gray100};
  width: 200px;
  height: 217px;
  top: 36px;
  position: absolute;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-top: 21px;
  gap: 8px;
  z-index: 9;
`;
export const LogoutButton = styled(FilledButton)`
  background-color: ${(props) => props.theme.colors.gray100};
  color: ${(props) => props.theme.colors.main.purple};
`;
export const CorpBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.gray200};
  margin-top: 16px;
  padding-left: 20px;
`;
export const CorpGroup = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
`;
export const CorpList = styled.p`
  margin: 0px;
  color: ${(props) => props.theme.colors.gray400};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

function Dropdown() {
  const navigate = useNavigate();
  const clearTokens = Tokens.clear();

  const onLogoutHandler = () => {
    clearTokens;
    navigate(pagesTo.main);
  };

  return (
    <DropdownContainer>
      <Link to="#">
        <FilledButton width="136px" height="40px">
          계정관리
        </FilledButton>
      </Link>
      <LogoutButton onClick={onLogoutHandler} width="136px" height="40px">
        로그아웃
      </LogoutButton>
      <CorpBlock>
        <CorpGroup>
          <Link to="#">
            <CorpList>개인정보처리방침</CorpList>
          </Link>
          <Link to="#">
            <CorpList>서비스 약관</CorpList>
          </Link>
        </CorpGroup>
      </CorpBlock>
    </DropdownContainer>
  );
}

export default Dropdown;
