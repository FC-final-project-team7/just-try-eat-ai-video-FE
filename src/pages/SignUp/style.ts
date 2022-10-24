import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin-top: 64px;
  p {
    margin: 0;
  }
`;

export const TermsArea = styled.div`
  width: 720px;
  height: 360px;
  color: ${(props) => props.theme.colors.gray400};
  background-color: ${(props) => props.theme.colors.gray100};
  border-radius: 10px;
  margin: 64px 0 49px;
  padding: 0 20px 20px;
  line-height: 1.8;
  overflow-y: auto;
`;

export const AgreeArea = styled.div`
  display: flex;
  gap: 13px;
  margin-bottom: 23px;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const LoginArea = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.light};
  margin: 48px 0 56px;
  p {
    color: ${(props) => props.theme.colors.main.purple};
    margin-left: 4px;
  }
`;
