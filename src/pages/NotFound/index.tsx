import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';
import { pagesTo } from '../pages';

export const Container = styled.div`
  ${(props) => props.theme.flex.flexColumn};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: ${(props) => props.theme.fontSize.xxLarge};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin: 0 0 56px;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.xLarge};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    margin: 0 0 64px;
  }
`;

export const ButtonGroup = styled.div`
  ${(props) => props.theme.flex.flexColumn};
  gap: 20px;
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>404 error</h1>
      <h2>죄송합니다. 페이지를 찾을 수 없습니다.</h2>
      <ButtonGroup>
        <FilledButton
          width="328px"
          height="48px"
          onClick={() => navigate(pagesTo.main)}
        >
          메인으로
        </FilledButton>
        <FilledButton
          width="328px"
          height="48px"
          onClick={() => {
            navigate(-1);
          }}
        >
          이전 페이지
        </FilledButton>
      </ButtonGroup>
    </Container>
  );
};

export default NotFound;
