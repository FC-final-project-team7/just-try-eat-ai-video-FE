import styled from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';

export const Container = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin-top: 144px;
  p {
    margin: 0;
  }
`;

export const Form = styled.form`
  width: 392px;
  margin-top: 64px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 24px;
`;

export const FormButton = styled(FilledButton)`
  margin-top: 16px;
  border-radius: 10px;
`;

export const FindGroup = styled.div`
  ${(props) => props.theme.flex.flexAround}
  width: 392px;
  height: 40px;
  padding: 0 52px;
  margin-top: 24px;
  p {
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`;

export const OAuthGrop = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  margin: 72px 0 32px;
  h2 {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    margin: 0;
  }
`;

export const OAuthButtonGroup = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  gap: 12px;
  margin-top: 32px;
`;

export const OAuthButton = styled(FilledButton)`
  ${(props) => props.theme.flex.flexBetween};
  padding: 12px 104px 12px 68px;
  background-color: ${(props) => props.theme.colors.gray100};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: #000;
  border-radius: 10px;
`;

export const SignUpBlock = styled.div`
  ${(props) => props.theme.flex.flexCenter};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.light};
  margin-bottom: 80px;
  p {
    color: ${(props) => props.theme.colors.main.purple};
    margin-left: 4px;
  }
`;
